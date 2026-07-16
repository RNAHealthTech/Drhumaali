import { Briefcase, Award, FileBadge, Activity, Target } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

export const metadata = {
  title: "Experience | Dr. Huma Ali",
  description: "Explore Dr. Huma Ali's professional experience, positions held, and certifications.",
};

export default function ExperiencePage() {
  return (
    <div className="py-20 bg-[var(--color-background)] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Professional <span className="text-[var(--color-primary)]">Experience</span>
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            A track record of excellence in Obstetrics & Gynaecology, with experience in leading medical institutions and ongoing commitment to professional development.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Positions Held */}
          <AnimateIn direction="up" delay={0.1} className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Positions Held</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <h3 className="font-semibold text-lg text-[var(--color-foreground)]">Associate Consultant</h3>
                <p className="text-[var(--color-primary)] font-medium mb-1">Obstetrics & Gynaecology</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">Sir Ganga Ram Hospital</p>
              </div>
              <div className="border-l-2 border-[var(--color-muted)] pl-4">
                <h3 className="font-semibold text-lg text-[var(--color-foreground)]">DNB Resident</h3>
                <p className="text-[var(--color-muted-foreground)] mb-1">Obstetrics & Gynaecology</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">Sir Ganga Ram Hospital</p>
              </div>
              <div className="border-l-2 border-[var(--color-muted)] pl-4">
                <h3 className="font-semibold text-lg text-[var(--color-foreground)]">DGO Resident</h3>
                <p className="text-[var(--color-muted-foreground)] mb-1">Obstetrics & Gynaecology</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">Vydehi Institute of Medical Science</p>
              </div>
            </div>
          </AnimateIn>

          {/* Professional Memberships */}
          <AnimateIn direction="up" delay={0.2} className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8">
              <Award size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Professional Memberships</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                </div>
                <p className="text-[var(--color-muted-foreground)]">AOGD (Association of Obstetricians & Gynaecologists of Delhi)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                </div>
                <p className="text-[var(--color-muted-foreground)]">FOGSI (Federation of Obstetric and Gynaecological Societies of India)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                </div>
                <p className="text-[var(--color-muted-foreground)]">IMA (Indian Medical Association)</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[var(--color-muted)]">
              <p className="text-sm italic text-[var(--color-muted-foreground)]">Active participation in various national and international conferences.</p>
            </div>
          </AnimateIn>

          {/* Training & Certifications */}
          <AnimateIn direction="up" delay={0.3} className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8">
              <FileBadge size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Training & Certifications</h2>
            <div className="space-y-4">
              <div className="bg-[var(--color-muted)]/30 p-4 rounded-xl">
                <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Advanced Ultrasound in Obs & Gynae</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Comprehensive training for accurate diagnostics.</p>
              </div>
              <div className="bg-[var(--color-muted)]/30 p-4 rounded-xl">
                <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Laparoscopy & Hysteroscopy</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Minimally invasive surgical techniques.</p>
              </div>
              <div className="bg-[var(--color-muted)]/30 p-4 rounded-xl">
                <h3 className="font-semibold text-[var(--color-foreground)] mb-1">High-Risk Pregnancy Management</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Specialized care protocols for complex cases.</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Specialized Procedures */}
        <AnimateIn direction="up" className="max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
              <Activity size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Specialized Procedures</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-foreground)]">Diagnostic Hysteroscopy</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Examining the inside of the uterus to diagnose and treat causes of abnormal bleeding.
              </p>
            </div>
            <div className="bg-white dark:bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-foreground)]">Laparoscopic Myomectomy</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Minimally invasive removal of uterine fibroids while preserving the uterus for future fertility.
              </p>
            </div>
            <div className="bg-white dark:bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-foreground)]">Total Laparoscopic Hysterectomy</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Advanced surgical removal of the uterus with minimal scarring and faster recovery times.
              </p>
            </div>
            <div className="bg-white dark:bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-muted)] hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-foreground)]">Cervical Cerclage</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Surgical procedure to prevent premature birth by placing a stitch around the cervix.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Clinical Focus Areas */}
        <AnimateIn direction="up" className="max-w-6xl mx-auto mt-24 mb-10">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-muted)]">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Clinical Focus Areas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center font-bold shrink-0">01</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">High-Risk Obstetrics</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  Managing pregnancies complicated by conditions such as gestational diabetes, pregnancy-induced hypertension (PIH), multiple gestations, and history of recurrent pregnancy loss.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center font-bold shrink-0">02</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Adolescent Health</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  Addressing the unique gynecological needs of teenagers, including menstrual irregularities, PCOS management, and educational guidance for healthy development.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center font-bold shrink-0">03</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Menopause Management</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  Providing holistic care during the perimenopausal and menopausal transition, offering hormone replacement therapy (HRT) alternatives and bone health strategies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center font-bold shrink-0">04</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Preventive Oncology</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  Emphasizing early detection through routine Pap smears, HPV screening, and colposcopy for the prevention of cervical and other gynecological cancers.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
