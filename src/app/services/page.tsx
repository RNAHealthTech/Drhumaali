import { Baby, Activity, Beaker, ShieldPlus, HeartPulse, Sparkles, ActivitySquare, ShieldCheck, Search, Users, ShieldAlert, Heart, Syringe, PlusCircle, UserCheck } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Services | Dr. Huma Ali",
  description: "Comprehensive Gynaecology & Obstetrics Services at Sir Ganga Ram Hospital.",
};

export default function ServicesPage() {
  const obstetricsServices = [
    {
      title: "Prenatal Care & Counselling",
      description: "Comprehensive antenatal check-ups, nutritional guidance, lifestyle advice, and preparation for childbirth.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "High-Risk Pregnancy Management",
      description: "Specialized care for conditions like gestational diabetes, hypertension, pre-eclampsia, and multiple pregnancies.",
      icon: <ShieldAlert className="w-8 h-8" />
    },
    {
      title: "Fetal Diagnostic & Therapeutic Procedures",
      description: "Advanced fetal imaging, Amniocentesis, CVS, Placental Biopsy, and intrauterine transfusion for fetal anemia.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Antepartum Fetal Surveillance",
      description: "Continuous monitoring of fetal health including NST, BPP, and Doppler studies.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Epidural Analgesia in Labour",
      description: "Pain management options during childbirth to ensure a comfortable delivery experience.",
      icon: <Syringe className="w-8 h-8" />
    },
    {
      title: "Postpartum Care",
      description: "Support and guidance for new mothers during the crucial postpartum period for physical and emotional recovery.",
      icon: <Baby className="w-8 h-8" />
    }
  ];

  const gynaecologyServices = [
    {
      title: "Adolescent Gynaecology",
      description: "Care for young women (10-19) addressing menstrual irregularities, hormonal imbalances, and reproductive health.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Gynaecological Endoscopy",
      description: "Minimally invasive laparoscopy & hysteroscopy for endometriosis, ovarian cysts, uterine fibroids, and infertility.",
      icon: <ActivitySquare className="w-8 h-8" />
    },
    {
      title: "Gynaecological Oncology",
      description: "Screening, diagnosis, and management of gynaecological cancers including ovarian, uterine, cervical, and vulvar cancers.",
      icon: <ShieldPlus className="w-8 h-8" />
    },
    {
      title: "IVF & Reproductive Medicine",
      description: "Comprehensive evaluation and treatment for infertility including IUI, IVF, and ICSI.",
      icon: <Beaker className="w-8 h-8" />
    },
    {
      title: "Urogynecology",
      description: "Diagnosis and treatment of pelvic floor disorders, urinary incontinence, and pelvic organ prolapse.",
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      title: "Midlife Women's Health Care",
      description: "Management of perimenopausal and postmenopausal symptoms, HRT, and bone density screening.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Management of Menstrual Disorders",
      description: "Diagnosis and treatment of irregular periods, heavy bleeding, dysmenorrhea, and amenorrhea.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "PCOS Management",
      description: "Comprehensive care for PCOS, addressing hormonal imbalances, infertility, and metabolic concerns.",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      title: "Contraceptive Advice & Family Planning",
      description: "Personalized counseling on various contraceptive methods and reproductive health choices.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Preventive Gynaecology",
      description: "Routine gynaecological check-ups, Pap smears, HPV vaccination, and early detection of conditions.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-muted)]/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Our Comprehensive Gynaecology & <span className="text-[var(--color-primary)]">Obstetrics Services</span>
          </h1>
          <h2 className="text-2xl font-medium text-[var(--color-secondary)] mb-6">
            Expert Care for Every Stage of a Woman's Life at Sir Ganga Ram Hospital
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            Dr. Huma Ali, a leading Gynaecologist and Obstetrician at Sir Ganga Ram Hospital (SGRH) in Central Delhi, is dedicated to providing a full spectrum of specialized services designed to meet the unique health needs of women. Our practice combines advanced medical expertise with compassionate care, ensuring optimal health outcomes and a supportive patient experience. We are committed to offering world-class gynaecological and obstetric solutions to patients in Central Delhi and surrounding regions.
          </p>
        </AnimateIn>

        {/* Obstetrics Section */}
        <div className="mb-24">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Obstetrics Services</h2>
            <p className="text-xl text-[var(--color-secondary)] font-medium">Nurturing Motherhood with Expert Care</p>
          </AnimateIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obstetricsServices.map((service, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] hover:shadow-xl hover:border-[var(--color-primary-light)] transition-all duration-300 h-full group flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{service.title}</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">{service.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Gynaecology Section */}
        <div className="mb-24">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Gynaecology Services</h2>
            <p className="text-xl text-[var(--color-secondary)] font-medium">Promoting Women's Health and Well-being</p>
          </AnimateIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gynaecologyServices.map((service, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-muted)] hover:shadow-xl hover:border-[var(--color-primary-light)] transition-all duration-300 h-full group flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{service.title}</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">{service.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to prioritize your health?</h2>
            <p className="text-lg mb-8 text-white/90">
              At Dr. Huma Ali's clinic at SGRH, we are dedicated to providing exceptional care that prioritizes your health and well-being.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Schedule a Consultation
            </Link>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
