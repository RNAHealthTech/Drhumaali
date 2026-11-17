import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { CalendarCheck, ChevronRight, Award, Stethoscope, Clock, ShieldCheck, HeartPulse, UserCheck, PhoneCall, Quote, Plus, FileText, CheckCircle2, Hospital } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Huma Ali",
    "image": "https://sgrh.com/assets/img/profile/gab2780.png",
    "url": "https://drhumaligynae.com",
    "description": "Expert Obstetrician & Gynaecologist at Sir Ganga Ram Hospital (SGRH), New Delhi.",
    "telephone": "+91-8920693881",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sir Ganga Ram Hospital, Sir Ganga Ram Hospital Marg, Rajinder Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110060",
      "addressCountry": "IN"
    },
    "medicalSpecialty": "Gynaecology, Obstetrics",
    "hospitalAffiliation": {
      "@type": "Hospital",
      "name": "Sir Ganga Ram Hospital"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-background)] pt-12 pb-24 md:pt-32 md:pb-40">
        {/* Soft Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[70%] bg-[var(--color-primary-light)]/50 rounded-full blur-[120px] opacity-70"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-[var(--color-secondary-light)]/10 rounded-full blur-[100px] opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1 relative z-20">
              <AnimateIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2.5 bg-white/60 dark:bg-[var(--color-card)]/60 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--color-secondary)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50">
                  <Stethoscope size={16} className="text-[var(--color-primary)]" />
                  <span className="tracking-wide uppercase text-xs font-bold">Expert Obstetrics & Gynaecology</span>
                </div>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-[var(--color-foreground)] tracking-tight">
                  Empowering Women's Health <br/>
                  <span className="font-light italic text-[var(--color-primary)] text-3xl md:text-5xl lg:text-6xl">with Compassion and Expertise</span>
                </h1>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.3}>
                <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] leading-relaxed max-w-xl font-medium">
                  Welcome to the official website of Dr. Huma Ali, a distinguished Obstetrician and Gynaecologist at the prestigious Sir Ganga Ram Hospital (SGRH) in Central Delhi. With a profound commitment to women's health and well-being, Dr. Ali offers comprehensive and compassionate care across all stages of a woman's life, from adolescence through reproductive years to menopause.
                </p>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_8px_30px_rgb(192,127,98,0.3)] hover:shadow-[0_8px_30px_rgb(192,127,98,0.5)] hover:-translate-y-1"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:+918920693881"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-secondary)] hover:text-[var(--color-primary)] px-6 py-4 rounded-full font-semibold transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[var(--color-card)] flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                    <PhoneCall size={18} />
                  </div>
                  Call Clinic
                </a>
              </AnimateIn>
            </div>
            
            {/* Image / Visual */}
            <div className="w-full md:w-1/2 relative order-1 md:order-2">
              <AnimateIn direction="left" delay={0.2} className="relative z-10 w-full max-w-lg mx-auto">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 border border-white/20 rounded-[2rem] z-20 pointer-events-none"></div>
                  <img
                    src="https://sgrh.com/assets/img/profile/gab2780.png"
                    alt="Dr. Huma Ali"
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gray-100 dark:bg-slate-800"
                  />
                  {/* Premium gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
                </div>
                
                {/* Floating Glass Badge */}
                <AnimateIn direction="up" delay={0.6} className="absolute -bottom-6 -left-6 md:-left-12 bg-white/80 dark:bg-[var(--color-card)]/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white flex items-center gap-4 z-30">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-secondary)] text-lg leading-none">Associate Consultant</div>
                    <div className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-widest mt-1">Obstetrics & Gynaecology</div>
                  </div>
                </AnimateIn>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="relative z-30 -mt-16 md:-mt-20 mx-4 md:mx-auto md:w-[85%] max-w-6xl">
        <AnimateIn direction="up" delay={0.4}>
          <div className="bg-white/70 dark:bg-[var(--color-card)]/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white p-2">
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] mb-2 tracking-tight">10<span className="text-[var(--color-primary)]">+</span></div>
                <div className="text-[var(--color-muted-foreground)] font-semibold text-sm uppercase tracking-wider mb-1">Years Experience</div>
                <div className="text-gray-400 text-sm">Dedicated clinical care</div>
              </div>
              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] mb-2 tracking-tight">SGRH</div>
                <div className="text-[var(--color-muted-foreground)] font-semibold text-sm uppercase tracking-wider mb-1">Hospital Attachment</div>
                <div className="text-gray-400 text-sm">Sir Ganga Ram Hospital</div>
              </div>
              <div className="text-center px-4 pt-8 md:pt-0 flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] mb-2 tracking-tight flex items-center justify-center gap-1">
                  DNB<Award size={28} className="text-[var(--color-primary)] mb-2" />
                </div>
                <div className="text-[var(--color-muted-foreground)] font-semibold text-sm uppercase tracking-wider mb-1">Board Certified</div>
                <div className="text-gray-400 text-sm">Obstetrics & Gynaecology</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <AnimateIn direction="up">
              <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">Your Journey to Wellness Starts Here</h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.1}>
              <h3 className="text-3xl md:text-5xl font-light text-[var(--color-secondary)] mb-6 tracking-tight">A Legacy of Excellence at <span className="font-semibold">SGRH</span></h3>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2}>
              <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed mb-4">
                Dr. Huma Ali is an integral part of the renowned Institute of Obstetrics & Gynaecology at SGRH, a center of excellence established in 1954. Her practice is built upon a foundation of advanced medical knowledge, precision, and a patient-centric approach, ensuring every woman receives personalized and effective treatment. Located conveniently in Central Delhi, Dr. Ali's clinic provides accessible, world-class healthcare to both local and international patients.
              </p>
              <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed mb-8">
                At Dr. Huma Ali's practice, we understand the unique health challenges women face. We are dedicated to providing a supportive and confidential environment where your concerns are heard, and your health goals are met with high standards of evidence-based medical care. Whether you are seeking routine gynaecological check-ups, specialized obstetric care, or clinical evaluations for complex conditions, Dr. Ali is here to guide you with empathy and expertise.
              </p>
              <div className="max-w-2xl mx-auto italic text-[var(--color-secondary)] font-medium text-xl border-l-4 border-[var(--color-primary)] pl-6 text-left py-2">
                "In the journey of womanhood, every step deserves expert care and unwavering support. My mission is to empower you with health, knowledge, and confidence."
                <div className="text-sm font-bold mt-3 text-[var(--color-primary)] uppercase tracking-wider not-italic">— Dr. Huma Ali</div>
              </div>
            </AnimateIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Service 1 */}
            <AnimateIn direction="up" delay={0.1}>
              <div className="bg-white dark:bg-[var(--color-card)] p-10 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                  <HeartPulse size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)] tracking-tight">Safe Journey to Motherhood</h4>
                <ul className="space-y-4 text-[var(--color-muted-foreground)] mb-8 flex-1">
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Normal delivery & High-risk pregnancy</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Personalized prenatal & postnatal care</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Comprehensive maternity support in Delhi</li>
                </ul>
                <Link href="/contact" className="text-[var(--color-primary)] font-bold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 mt-auto">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </AnimateIn>

            {/* Service 2 */}
            <AnimateIn direction="up" delay={0.2}>
              <div className="bg-white dark:bg-[var(--color-card)] p-10 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                  <Stethoscope size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)] tracking-tight">Gynaecological Procedures</h4>
                <ul className="space-y-4 text-[var(--color-muted-foreground)] mb-8 flex-1">
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Laparoscopic & Hysteroscopic Surgeries</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Treatment for urine leakage problems</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Evaluation and care for recurrent infections</li>
                </ul>
                <Link href="/contact" className="text-[var(--color-primary)] font-bold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 mt-auto">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </AnimateIn>

            {/* Service 3 */}
            <AnimateIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-[var(--color-card)] p-10 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                  <UserCheck size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)] tracking-tight">Hormonal & Wellness Care</h4>
                <ul className="space-y-4 text-[var(--color-muted-foreground)] mb-8 flex-1">
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Treatment for PCOS and PCOD</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Personalized menopause management</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" /> Management of fibroids & endometriosis</li>
                </ul>
                <Link href="/contact" className="text-[var(--color-primary)] font-bold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 mt-auto">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-[var(--color-card)] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary-light)]/30 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            <AnimateIn direction="left" delay={0.2} className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-[2rem] transform -translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
                  alt="Clinic Care" 
                  className="relative rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] object-cover h-[500px] lg:h-[600px] w-full"
                />
              </div>
            </AnimateIn>
            
            <div className="w-full md:w-1/2 space-y-10">
              <AnimateIn direction="up">
                <div>
                  <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">Why Choose Us?</h2>
                  <h3 className="text-3xl md:text-5xl font-light text-[var(--color-secondary)] mb-6 tracking-tight">World-Class Care at <span className="font-semibold">Sir Ganga Ram Hospital</span></h3>
                  <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed">
                    With extensive training and a dedication to patient well-being, Dr. Huma Ali provides state-of-the-art care tailored to your unique needs.
                  </p>
                </div>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.2}>
                <ul className="space-y-6">
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-light)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary-light)] shadow-sm">
                      <Award size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-secondary)] text-xl mb-1">Expert Care</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">Dr. Huma Ali is a qualified and experienced Gynaecologist and Obstetrician with MBBS, DGO, and DNB qualifications, dedicated to providing quality medical care.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-light)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary-light)] shadow-sm">
                      <Stethoscope size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-secondary)] text-xl mb-1">Comprehensive Services</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">From high-risk pregnancy management and IVF & reproductive medicine to gynaecological endoscopy and adolescent gynaecology, a full spectrum of services is available.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-light)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary-light)] shadow-sm">
                      <ShieldCheck size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-secondary)] text-xl mb-1">State-of-the-Art Facilities</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">Practicing at Sir Ganga Ram Hospital, patients have access to cutting-edge medical technology and advanced facilities.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-light)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary-light)] shadow-sm">
                      <HeartPulse size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-secondary)] text-xl mb-1">Patient-Centric Approach</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">Dr. Ali is known for her compassionate care, clear communication, and dedication to empowering her patients.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-light)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary-light)] shadow-sm">
                      <Hospital size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-secondary)] text-xl mb-1">Convenient Location</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">Situated in Central Delhi, the clinic is easily accessible for patients seeking comprehensive gynaecological care in Delhi.</p>
                    </div>
                  </li>
                </ul>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.3}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-transparent text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-bold text-lg transition-colors group"
                >
                  Learn More About Us
                  <span className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all ml-2">
                    <ChevronRight size={18} />
                  </span>
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories / Testimonials */}
      <section className="py-24 md:py-32 bg-[var(--color-primary-light)]/30 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-[var(--color-primary)]/10">
          <Quote size={120} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <AnimateIn direction="up">
              <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">Patient Care Standards</h2>
              <h3 className="text-3xl md:text-5xl font-light text-[var(--color-secondary)] mb-6 tracking-tight">Principles of <span className="font-semibold">Care</span></h3>
              <p className="text-[var(--color-muted-foreground)] text-lg">Our core commitments to compassionate, unhurried, and evidence-based consultations.</p>
            </AnimateIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                quote: "Consultations are structured to be unhurried and attentive, ensuring patients have ample time to discuss symptoms, medical history, and clinical questions thoroughly.",
                title: "Thorough Consultations",
                subtitle: "Attentive Clinical Care",
                badge: "TC"
              },
              {
                quote: "Transparent and clear communication ensures that diagnosis, treatment options, and care pathways are explained clearly to empower informed decision-making.",
                title: "Patient Empowerment",
                subtitle: "Evidence-Based Guidance",
                badge: "PE"
              },
              {
                quote: "A supportive, respectful, and confidential environment is maintained at all times, prioritizing patient comfort and dignity across every stage of care.",
                title: "Compassionate Care",
                subtitle: "Respect & Confidentiality",
                badge: "CC"
              }
            ].map((principle, index) => (
              <AnimateIn key={principle.title} direction="up" delay={index * 0.15} className={index === 1 ? "lg:mt-10" : ""}>
                <div className="bg-white dark:bg-[var(--color-card)] p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white relative h-full flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center text-[var(--color-primary)] mb-6">
                    <Quote size={20} className="fill-current" />
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-[var(--color-primary)]">
                    <CheckCircle2 size={18} />
                    <span>Clinical Standard</span>
                  </div>
                  <p className="text-[var(--color-secondary)] mb-8 font-medium leading-relaxed italic flex-1">
                    "{principle.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">
                      {principle.badge}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-secondary)]">{principle.title}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">{principle.subtitle}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance & Affiliations Banner */}
      <section className="py-12 bg-white dark:bg-[var(--color-card)] border-y border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Hospital size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Hospital Affiliation</h3>
                <p className="text-gray-600 dark:text-gray-400">Sir Ganga Ram Hospital, New Delhi</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Clinical Governance</h3>
                <p className="text-gray-600 dark:text-gray-400">High Standards of Patient Care</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Comprehensive Insurance</h3>
                <p className="text-gray-600 dark:text-gray-400">Major health insurances accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips / Insights Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">Health Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Expert Advice & Wellness Tips</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Empowering women with the right knowledge for a healthier lifestyle and proactive care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tip 1 */}
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop" alt="Healthy Lifestyle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">Wellness</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[var(--color-primary)] transition-colors">5 Important Tests Every Woman Should Take</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Regular screening is the key to prevention. Learn about the essential health checkups recommended for women in different age groups.</p>
                <div className="flex items-center text-sm font-bold text-[var(--color-primary)] group-hover:gap-2 transition-all gap-1 cursor-pointer">
                  Read Article <ChevronRight size={16} />
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop" alt="Pregnancy Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">Maternity</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[var(--color-primary)] transition-colors">Nutrition Guide for a Healthy Pregnancy</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">A balanced diet plays a crucial role in maternal and fetal health. Discover the essential nutrients needed during your pregnancy journey.</p>
                <div className="flex items-center text-sm font-bold text-[var(--color-primary)] group-hover:gap-2 transition-all gap-1 cursor-pointer">
                  Read Article <ChevronRight size={16} />
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white dark:bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Yoga and PCOD" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">Lifestyle</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[var(--color-primary)] transition-colors">Managing PCOD: Lifestyle & Diet Changes</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">PCOD is a common hormonal disorder, but with the right lifestyle modifications, it can be managed effectively without extreme measures.</p>
                <div className="flex items-center text-sm font-bold text-[var(--color-primary)] group-hover:gap-2 transition-all gap-1 cursor-pointer">
                  Read Article <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[var(--color-card)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Common questions our patients ask before their visit.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 dark:text-gray-100 list-none">
                When should a woman first visit a gynecologist?
                <span className="transition group-open:rotate-180">
                  <Plus className="group-open:hidden" />
                  <div className="hidden group-open:block w-6 h-0.5 bg-current"></div>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                It is generally recommended that girls have their first gynecological visit between the ages of 13 and 15. This first visit is usually just a conversation to establish a relationship and discuss general health, menstruation, and any concerns.
              </p>
            </details>
            
            <details className="group bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 dark:text-gray-100 list-none">
                Do you handle high-risk pregnancies?
                <span className="transition group-open:rotate-180">
                  <Plus className="group-open:hidden" />
                  <div className="hidden group-open:block w-6 h-0.5 bg-current"></div>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                Yes, Dr. Huma Ali has extensive experience in managing high-risk pregnancies. This includes conditions like gestational diabetes, hypertension, advanced maternal age, and multiple pregnancies, ensuring careful monitoring for both mother and baby.
              </p>
            </details>
            
            <details className="group bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 dark:text-gray-100 list-none">
                What are the signs that I might have PCOS?
                <span className="transition group-open:rotate-180">
                  <Plus className="group-open:hidden" />
                  <div className="hidden group-open:block w-6 h-0.5 bg-current"></div>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                Common signs of Polycystic Ovary Syndrome (PCOS) include irregular or missed periods, excessive hair growth, acne, weight gain, and difficulty getting pregnant. If you experience these symptoms, it's advisable to consult for a proper diagnosis and management plan.
              </p>
            </details>
            
            <details className="group bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 dark:text-gray-100 list-none">
                How frequently should I get a Pap smear?
                <span className="transition group-open:rotate-180">
                  <Plus className="group-open:hidden" />
                  <div className="hidden group-open:block w-6 h-0.5 bg-current"></div>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                General guidelines suggest women start getting Pap smears at age 21, repeating every 3 years if results are normal. Women aged 30-65 might combine it with an HPV test every 5 years. However, Dr. Huma Ali will recommend a schedule tailored specifically to your personal health history.
              </p>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your health matters.</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-[var(--color-primary-light)]">
            Reach out to schedule your personalized consultation with a trusted Gynecologist in Delhi.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white dark:bg-[var(--color-card)] text-[var(--color-primary-dark)] hover:bg-gray-100 dark:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 text-lg"
          >
            <CalendarCheck size={20} />
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
