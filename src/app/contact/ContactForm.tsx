"use client";

import { useState } from "react";
import { Send, CheckCircle2, X } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzeprllw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-xl border border-[var(--color-muted)] h-full relative">
        <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Book Appointment</h2>
        
        {status === "error" && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm">
            Oops! There was a problem submitting your form. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Preferred Date</label>
              <input 
                type="date" 
                id="date"
                name="date"
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="timeSlot" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Time Slot</label>
              <select id="timeSlot" name="timeSlot" required className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors">
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Reason for Visit</label>
            <textarea 
              id="reason"
              name="reason"
              rows={3}
              placeholder="e.g., General Check-up, Pregnancy Consultation, PCOS Management, etc."
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors resize-none"
            ></textarea>
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">How did you hear about us?</label>
            <select id="source" name="source" className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors">
              <option value="">Select</option>
              <option value="search_engine">Search Engine</option>
              <option value="referral">Referral</option>
              <option value="social_media">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <button 
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] dark:bg-slate-800 hover:bg-[var(--color-secondary-dark)] dark:hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[var(--color-secondary)]/30 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {status === "submitting" ? "Sending..." : "Request Appointment"}
          </button>
          
          <p className="text-xs text-center text-[var(--color-muted-foreground)] mt-4">
            This form is for requesting an appointment. Our team will contact you to confirm the date and time.
          </p>
        </form>
      </div>

      {/* Success Popup Modal */}
      {status === "success" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setStatus("idle")}
              className="absolute top-4 right-4 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">Thank You!</h3>
              <p className="text-[var(--color-muted-foreground)] mb-6">
                Your appointment request has been received. Our team will contact you shortly to confirm the date and time.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
