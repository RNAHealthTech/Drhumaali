import type { Metadata } from "next";
import { GraduationCap, Languages, Hospital, Heart, History, Camera } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About | Dr. Huma Ali",
  description: "Learn more about Dr. Huma Ali's education and background.",
  alternates: {
    canonical: "https://drhumaligynae.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-[var(--color-muted)]/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            About <span className="text-[var(--color-primary)]">Dr. Huma Ali</span>
          </h1>
          <h2 className="text-2xl font-medium text-[var(--color-secondary)] mb-4">A Dedication to Women's Health and Empowerment</h2>
          <p className="text-lg text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
            Dr. Huma Ali is a highly respected and accomplished Obstetrician and Gynaecologist practicing at the esteemed Sir Ganga Ram Hospital (SGRH) in Central Delhi. With a career marked by dedication, expertise, and a profound commitment to patient well-being, Dr. Ali has become a trusted name in women's healthcare.
          </p>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            Her philosophy centers on providing holistic, evidence-based care that empowers women to make informed decisions about their health at every stage of life.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Info */}
          <AnimateIn direction="left" className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--color-foreground)]">
                <GraduationCap className="text-[var(--color-primary)]" />
                Education
              </h2>
              
              <div className="space-y-6">
                <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-[var(--color-muted)] last:before:hidden">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">DNB</h3>
                  <p className="text-lg text-[var(--color-muted-foreground)] font-medium mb-1">Sir Ganga Ram Hospital, New Delhi</p>
                  <p className="text-sm text-[var(--color-muted-foreground)] bg-[var(--color-muted)] inline-block px-3 py-1 rounded-full">2021</p>
                </div>

                <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-[var(--color-muted)] last:before:hidden">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">DGO</h3>
                  <p className="text-lg text-[var(--color-muted-foreground)] font-medium mb-1">Vydehi Institute of Medical Science, Bangalore</p>
                  <p className="text-sm text-[var(--color-muted-foreground)] bg-[var(--color-muted)] inline-block px-3 py-1 rounded-full">2016</p>
                </div>

                <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-[var(--color-muted)] last:before:hidden">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">MBBS</h3>
                  <p className="text-lg text-[var(--color-muted-foreground)] font-medium mb-1">Sri Siddhartha Medical College Tumkur, Karnataka</p>
                  <p className="text-sm text-[var(--color-muted-foreground)] bg-[var(--color-muted)] inline-block px-3 py-1 rounded-full">2015</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--color-foreground)]">
                <Languages className="text-[var(--color-primary)]" />
                Languages Spoken
              </h2>
              <div className="flex flex-wrap gap-3">
                {['English', 'Hindi'].map(lang => (
                  <span key={lang} className="px-5 py-2.5 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] font-medium rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Sidebar */}
          <AnimateIn direction="right" className="space-y-8">
            <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-[var(--color-card)]/10 rounded-bl-full -mr-10 -mt-10"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Hospital />
                Current Role
              </h3>
              <div className="space-y-2 relative z-10">
                <p className="text-2xl font-bold text-white mb-1">Associate Consultant</p>
                <p className="text-[var(--color-primary-light)] font-medium">Obstetrics & Gynaecology</p>
                <hr className="border-white/20 my-4" />
                <p className="text-white/90">Sir Ganga Ram Hospital<br/>New Delhi, India</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-[var(--color-muted)]">
              <h3 className="text-lg font-bold mb-4 text-[var(--color-foreground)]">Profile Details</h3>
              <ul className="space-y-4 text-[var(--color-muted-foreground)]">
                <li className="flex justify-between border-b border-[var(--color-muted)] pb-2">
                  <span>Specialty</span>
                  <span className="font-medium text-[var(--color-foreground)] text-right">Obstetrics &<br/>Gynaecology</span>
                </li>
                <li className="flex justify-between border-b border-[var(--color-muted)] pb-2">
                  <span>Experience</span>
                  <span className="font-medium text-[var(--color-foreground)] text-right">10+ Years</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          
        </div>

        {/* Doctor's Philosophy */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 dark:bg-[var(--color-card)]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-2xl"></div>
            
            <Heart className="w-12 h-12 text-[var(--color-accent)] mb-6 relative z-10" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Philosophy of Care: Compassion, Precision, and Empowerment</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed italic relative z-10 mb-6">
              "Dr. Huma Ali believes that effective healthcare extends beyond medical treatment; it encompasses empathy, clear communication, and patient education. She is dedicated to creating a supportive and confidential environment where patients feel comfortable discussing their health concerns."
            </p>
            <ul className="text-white/90 space-y-4 relative z-10 list-disc pl-6 text-lg md:text-xl leading-relaxed">
              <li><strong className="text-[var(--color-accent)]">Personalized Treatment Plans:</strong> Tailoring care to the individual needs and preferences of each patient.</li>
              <li><strong className="text-[var(--color-accent)]">Advanced Medical Practices:</strong> Utilizing the latest diagnostic tools and treatment modalities available at SGRH.</li>
              <li><strong className="text-[var(--color-accent)]">Patient Education:</strong> Ensuring patients are well-informed about their conditions and treatment options.</li>
              <li><strong className="text-[var(--color-accent)]">Holistic Well-being:</strong> Addressing not just physical symptoms but also the emotional and psychological aspects of women's health.</li>
            </ul>
          </div>
        </AnimateIn>
        
        {/* Expertise Section */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Expertise in Central Delhi's Premier Healthcare Institution</h2>
          </div>
          <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 md:p-10 shadow-sm border border-[var(--color-muted)] text-lg text-[var(--color-muted-foreground)] leading-relaxed space-y-6">
            <p>
              As an integral part of the Institute of Obstetrics & Gynaecology at SGRH, Dr. Huma Ali contributes to a legacy of excellence in women's healthcare. Her expertise spans a wide range of services, including high-risk pregnancy management, infertility treatments (IVF), minimally invasive gynaecological surgeries (laparoscopy), and comprehensive care for adolescent and menopausal women. Her presence at SGRH ensures that patients in Central Delhi and beyond have access to world-class gynaecological and obstetric care.
            </p>
            <p>
              Dr. Ali is committed to staying abreast of the latest advancements in her field, regularly participating in conferences and workshops to integrate cutting-edge techniques into her practice. Her unwavering dedication to her patients and her profession makes her a distinguished gynaecologist in Delhi and a valuable asset to the healthcare community.
            </p>
          </div>
        </AnimateIn>

        {/* Career Timeline */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto mt-24">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <History className="text-[var(--color-primary)] w-8 h-8" />
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] text-center">Career Journey</h2>
          </div>
          
          <div className="relative border-l-2 border-[var(--color-primary-light)] ml-4 md:ml-0 md:pl-0 md:border-none">
            <div className="md:absolute md:left-1/2 md:top-0 md:bottom-0 md:w-0.5 md:bg-[var(--color-primary-light)] md:-ml-[1px]"></div>
            
            {/* Timeline Item 1 */}
            <div className="mb-10 relative pl-8 md:pl-0 md:flex md:items-center md:justify-between w-full group">
              <div className="md:w-[45%] md:text-right md:pr-10">
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">Associate Consultant</h3>
                <p className="text-[var(--color-primary)] font-medium">Sir Ganga Ram Hospital, New Delhi</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Currently serving as a specialist, handling high-risk obstetrics and complex gynaecological surgeries.</p>
              </div>
              <div className="absolute left-[-9px] top-1 md:relative md:left-auto md:top-auto w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm md:mx-auto md:w-5 md:h-5 z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-[45%] md:pl-10 hidden md:block">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] font-bold text-sm">Present</span>
              </div>
              <div className="md:hidden mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] font-bold text-xs">Present</span>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-10 relative pl-8 md:pl-0 md:flex md:items-center md:justify-between w-full md:flex-row-reverse group">
              <div className="md:w-[45%] md:pl-10">
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">DNB Resident</h3>
                <p className="text-[var(--color-primary)] font-medium">Sir Ganga Ram Hospital, New Delhi</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Completed rigorous residency training at one of India's premier medical institutions.</p>
              </div>
              <div className="absolute left-[-9px] top-1 md:relative md:left-auto md:top-auto w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm md:mx-auto md:w-5 md:h-5 z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-[45%] md:text-right md:pr-10 hidden md:block">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-bold text-sm">2021</span>
              </div>
              <div className="md:hidden mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-bold text-xs">2021</span>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 md:pl-0 md:flex md:items-center md:justify-between w-full group">
              <div className="md:w-[45%] md:text-right md:pr-10">
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">DGO</h3>
                <p className="text-[var(--color-primary)] font-medium">Vydehi Institute of Medical Science, Bangalore</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Specialized in Obstetrics & Gynaecology, building a strong foundation in patient care.</p>
              </div>
              <div className="absolute left-[-9px] top-1 md:relative md:left-auto md:top-auto w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm md:mx-auto md:w-5 md:h-5 z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-[45%] md:pl-10 hidden md:block">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-bold text-sm">2016</span>
              </div>
              <div className="md:hidden mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-bold text-xs">2016</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Clinic/Hospital Gallery */}
        <AnimateIn direction="up" className="mt-24 mb-10">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Camera className="text-[var(--color-primary)] w-8 h-8" />
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] text-center">Our Environment</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" alt="Hospital Room" className="rounded-2xl h-48 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" alt="Medical Equipment" className="rounded-2xl h-48 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop" alt="Hospital Corridor" className="rounded-2xl h-48 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop" alt="Care" className="rounded-2xl h-48 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
