import { Clock, Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function OPDTimings() {
  return (
    <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl shadow-xl shadow-[var(--color-primary)]/5 overflow-hidden border border-[var(--color-muted)]">
      <div className="flex border-b border-[var(--color-muted)]">
        <div className="w-1/2 p-4 text-center font-bold text-lg border-r border-[var(--color-muted)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
          General OPD
        </div>
        <div className="w-1/2 p-4 text-center font-bold text-lg text-[var(--color-muted-foreground)] bg-[var(--color-muted)]/30">
          Private OPD
        </div>
      </div>
      
      <div className="grid md:grid-cols-2">
        {/* General OPD */}
        <div className="p-6 md:p-8 space-y-6 md:border-r border-[var(--color-muted)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Location</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">F64, F65<br/>Sir Ganga Ram Hospital</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Phone</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">011-42254000</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Email</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">huma.ali.17@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Private OPD */}
        <div className="p-6 md:p-8 space-y-6 bg-[var(--color-muted)]/10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[var(--color-card)] shadow-sm text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Days</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">Tuesday / Thursday / Saturday</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[var(--color-card)] shadow-sm text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Time</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">8:00 AM - 10:00 AM</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[var(--color-card)] shadow-sm text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-1">Room</h4>
              <p className="text-[var(--color-muted-foreground)] text-sm">Room No. F-47</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
