import { Trophy, HeartPulse, Sparkles, BookHeart, FileText, Presentation } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

export const metadata = {
  title: "Awards & Interests | Dr. Huma Ali",
  description: "Learn about Dr. Huma Ali's awards, achievements, and medical interests.",
};

export default function AwardsPage() {
  return (
    <div className="py-20 bg-white dark:bg-[var(--color-background)] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Awards & <span className="text-[var(--color-primary)]">Interests</span>
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            Recognized for excellence in medical practice and deeply interested in advancing women's healthcare.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Awards */}
          <AnimateIn direction="left">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                <Trophy size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Awards</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] flex gap-4">
                <div className="mt-1">
                  <Sparkles className="text-[var(--color-primary)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">Academic Excellence Award</h3>
                  <p className="text-[var(--color-muted-foreground)]">Recognized for outstanding academic performance during residency training.</p>
                </div>
              </div>
              
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] flex gap-4">
                <div className="mt-1">
                  <Sparkles className="text-[var(--color-primary)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">Best Paper Presentation</h3>
                  <p className="text-[var(--color-muted-foreground)]">Awarded at the Annual AOGD Conference for research in high-risk obstetrics.</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Interests */}
          <AnimateIn direction="right">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center">
                <HeartPulse size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Medical Interests</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] text-center group hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <BookHeart size={24} />
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-white">High-Risk Pregnancy</h3>
              </div>
              
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] text-center group hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <BookHeart size={24} />
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-white">Infertility Management</h3>
              </div>
              
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] text-center group hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <BookHeart size={24} />
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-white">Minimal Access Surgery</h3>
              </div>
              
              <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] text-center group hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <BookHeart size={24} />
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-white">Preventive Oncology</h3>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Publications & Research Section */}
        <AnimateIn direction="up" className="max-w-5xl mx-auto mt-24">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Publications & Research</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[var(--color-card)] p-8 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2 block">Research Article</span>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-foreground)]">Management of High-Risk Pregnancies in Urban Settings</h3>
              <p className="text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                A comprehensive study analyzing the challenges and outcomes of high-risk pregnancies, proposing updated protocols for improved maternal care.
              </p>
              <div className="text-sm font-medium text-gray-500">Published in: Journal of Obstetrics and Gynaecology India</div>
            </div>
            
            <div className="bg-white dark:bg-[var(--color-card)] p-8 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2 block">Clinical Study</span>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-foreground)]">Advancements in Minimally Invasive Gynaecological Surgeries</h3>
              <p className="text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                Evaluating the post-operative recovery rates and complication reduction through laparoscopic approaches compared to traditional methods.
              </p>
              <div className="text-sm font-medium text-gray-500">Presented at: AOGD Annual Conference</div>
            </div>
          </div>
        </AnimateIn>

        {/* Conferences & Workshops Section */}
        <AnimateIn direction="up" className="max-w-5xl mx-auto mt-24 mb-10">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <Presentation size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Conferences & Workshops</h2>
          </div>
          
          <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl shadow-sm border border-[var(--color-muted)] overflow-hidden">
            <div className="divide-y divide-[var(--color-muted)]">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-muted)]/30 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">National Conference on High-Risk Obstetrics</h3>
                  <p className="text-[var(--color-muted-foreground)]">Delegate & Panel Speaker</p>
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] rounded-full font-semibold text-sm">
                  New Delhi
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-muted)]/30 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">Advanced Laparoscopy Workshop (FOGSI)</h3>
                  <p className="text-[var(--color-muted-foreground)]">Participant & Trainee</p>
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] rounded-full font-semibold text-sm">
                  Mumbai
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-muted)]/30 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">Annual AOGD Conference</h3>
                  <p className="text-[var(--color-muted-foreground)]">Paper Presenter</p>
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] rounded-full font-semibold text-sm">
                  New Delhi
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
