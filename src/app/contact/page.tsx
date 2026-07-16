import OPDTimings from "@/components/OPDTimings";
import { Phone, Mail, MapPin, Ambulance, Send, HelpCircle, Car, Plus } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

export const metadata = {
  title: "Contact | Dr. Huma Ali",
  description: "Contact information, OPD timings, and emergency details for Dr. Huma Ali.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. Huma Ali",
    "description": "Contact information, OPD timings, and emergency details for Dr. Huma Ali.",
    "mainEntity": {
      "@type": "Physician",
      "name": "Dr. Huma Ali",
      "telephone": "+91-1142254000",
      "email": "info@drhumaali.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sir Ganga Ram Hospital, Sir Ganga Ram Hospital Marg, Rajinder Nagar",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110060",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[var(--color-primary-light)]/40 to-[var(--color-background)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Contact <span className="text-[var(--color-secondary)]">Dr. Huma Ali</span>
          </h1>
          <h2 className="text-2xl font-medium text-[var(--color-secondary)] mb-4">
            Connect with Expert Women's Healthcare at Sir Ganga Ram Hospital
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            We understand that seeking medical advice can be a personal journey, and we are here to provide you with compassionate and expert care. Whether you have a question, wish to schedule an appointment, or need to reach out for any other reason, Dr. Huma Ali and her team at Sir Ganga Ram Hospital (SGRH) in Central Delhi are ready to assist you.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* OPD Timings span 2 cols */}
          <AnimateIn direction="left" className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">OPD Schedule</h2>
            <OPDTimings />
            
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {/* Appointment */}
              <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-6 shadow-md border-l-4 border-[var(--color-primary)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-[var(--color-foreground)]">Call Us</h3>
                <p className="text-[var(--color-muted-foreground)] mb-3">+91 11-42254000</p>
                <a href="tel:+911142254000" className="text-[var(--color-primary)] font-medium hover:underline inline-flex items-center gap-1">
                  Call Now &rarr;
                </a>
              </div>

              {/* Emergency */}
              <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-6 shadow-md border-l-4 border-red-500 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Ambulance size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-red-600">Emergency</h3>
                <div className="space-y-1 text-sm text-red-600/80 mb-3">
                  <p>Helpline: <span className="font-semibold">+91 11-4225 1097</span></p>
                </div>
                <a href="tel:01142251097" className="text-red-600 font-medium hover:underline inline-flex items-center gap-1">
                  Emergency Line &rarr;
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-6 shadow-md border-l-4 border-blue-500 hover:-translate-y-1 transition-transform mt-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1 text-blue-600">Email Us</h3>
              <div className="space-y-1 text-sm text-blue-600/80 mb-3">
                <p>Inquiries: <span className="font-semibold">info@drhumaali.com</span></p>
                <p>Appointments: <span className="font-semibold">appointments@drhumaali.com</span></p>
              </div>
            </div>
          </AnimateIn>

          {/* Contact Form */}
          <AnimateIn direction="right" className="lg:col-span-1">
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-xl border border-[var(--color-muted)] h-full">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Book Appointment</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Time Slot</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors">
                      <option value="">Select</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Reason for Visit</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g., General Check-up, Pregnancy Consultation, PCOS Management, etc."
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)] bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors">
                    <option value="">Select</option>
                    <option value="search_engine">Search Engine</option>
                    <option value="referral">Referral</option>
                    <option value="social_media">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[var(--color-secondary)]/30 mt-2"
                >
                  <Send size={18} />
                  Request Appointment
                </button>
                
                <p className="text-xs text-center text-[var(--color-muted-foreground)] mt-4">
                  This form is for requesting an appointment. Our team will contact you to confirm the date and time.
                </p>
              </form>
            </div>
          </AnimateIn>
        </div>

        {/* Location Map Section */}
        <AnimateIn direction="up" className="max-w-6xl mx-auto bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center shrink-0">
            <MapPin size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-2xl mb-2 text-[var(--color-foreground)]">Visit Us</h3>
            <p className="text-[var(--color-muted-foreground)] text-lg">
              Sir Ganga Ram Hospital, Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi, Delhi - 110060
            </p>
          </div>
          <a 
            href="https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+Delhi" 
            target="_blank" 
            rel="noreferrer"
            className="shrink-0 bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 rounded-full font-bold hover:bg-[var(--color-primary)] transition-colors"
          >
            Get Directions
          </a>
        </AnimateIn>

        {/* Practical Information: FAQs & Parking */}
        <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-8 mb-10">
          
          {/* Parking & Transport */}
          <AnimateIn direction="left" className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <Car size={20} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Parking & Transit</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">Hospital Parking</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  Sir Ganga Ram Hospital offers multi-level paid parking for patients and visitors. Valet parking is also available at the main entrance for your convenience.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">Nearest Metro Station</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  The closest metro stations are <strong>Rajendra Place</strong> (Blue Line) and <strong>Karol Bagh</strong> (Blue Line). Auto-rickshaws and e-rickshaws are readily available from both stations to the hospital.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-xl">
                <h3 className="font-bold text-orange-800 dark:text-orange-400 text-sm mb-1">Accessibility Note</h3>
                <p className="text-orange-700 dark:text-orange-300 text-xs">
                  Wheelchairs and assistance are available at the main gate. Please ask the security personnel if you require help reaching the OPD.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Appointment FAQs */}
          <AnimateIn direction="right" className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Visit FAQs</h2>
            </div>
            
            <div className="space-y-4">
              <details className="group bg-[var(--color-background)] p-4 rounded-xl border border-[var(--color-muted)] cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[var(--color-foreground)] list-none text-sm">
                  What should I bring to my first appointment?
                  <span className="transition group-open:rotate-180 text-[var(--color-primary)]">
                    <Plus size={16} className="group-open:hidden" />
                    <div className="hidden group-open:block w-4 h-[2px] bg-current"></div>
                  </span>
                </summary>
                <p className="text-[var(--color-muted-foreground)] text-sm mt-3 leading-relaxed">
                  Please bring any previous medical records, recent scan reports (ultrasounds, MRI), blood test results, and a list of any current medications you are taking.
                </p>
              </details>
              
              <details className="group bg-[var(--color-background)] p-4 rounded-xl border border-[var(--color-muted)] cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[var(--color-foreground)] list-none text-sm">
                  How can I cancel or reschedule?
                  <span className="transition group-open:rotate-180 text-[var(--color-primary)]">
                    <Plus size={16} className="group-open:hidden" />
                    <div className="hidden group-open:block w-4 h-[2px] bg-current"></div>
                  </span>
                </summary>
                <p className="text-[var(--color-muted-foreground)] text-sm mt-3 leading-relaxed">
                  You can reschedule by calling the hospital helpline (+91 11-42254000) at least 24 hours in advance so the slot can be given to another patient in need.
                </p>
              </details>
              
              <details className="group bg-[var(--color-background)] p-4 rounded-xl border border-[var(--color-muted)] cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[var(--color-foreground)] list-none text-sm">
                  Do I need a referral to see Dr. Huma Ali?
                  <span className="transition group-open:rotate-180 text-[var(--color-primary)]">
                    <Plus size={16} className="group-open:hidden" />
                    <div className="hidden group-open:block w-4 h-[2px] bg-current"></div>
                  </span>
                </summary>
                <p className="text-[var(--color-muted-foreground)] text-sm mt-3 leading-relaxed">
                  No, a referral is not strictly necessary for a standard consultation. However, if you are claiming corporate insurance, please check your policy requirements.
                </p>
              </details>
            </div>
          </AnimateIn>

        </div>

      </div>
    </div>
  );
}
