import AnimateIn from "@/components/AnimateIn";
import { Camera, Heart, Hospital, Users } from "lucide-react";

export const metadata = {
  title: "Gallery | Dr. Huma Ali",
  description: "A Glimpse into Dr. Huma Ali's Practice and Sir Ganga Ram Hospital.",
};

export default function GalleryPage() {
  const categories = [
    {
      id: "portraits",
      title: "Dr. Huma Ali's Professional Portraits",
      icon: <Users className="w-6 h-6" />,
      images: [
        { src: "https://sgrh.com/assets/img/profile/gab2780.png", alt: "Dr. Huma Ali Professional Portrait" },
        { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", alt: "In-Consultation" },
        { src: "https://images.unsplash.com/photo-1582750433449-648ed127d09e?q=80&w=800&auto=format&fit=crop", alt: "Speaking Engagements" }
      ]
    },
    {
      id: "facilities",
      title: "Sir Ganga Ram Hospital (SGRH) Facilities",
      icon: <Hospital className="w-6 h-6" />,
      images: [
        { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop", alt: "Hospital Exterior" },
        { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop", alt: "Clinic Waiting Area" },
        { src: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?q=80&w=800&auto=format&fit=crop", alt: "Operation Theatres" }
      ]
    },
    {
      id: "care",
      title: "Patient Care and Wellness",
      icon: <Heart className="w-6 h-6" />,
      images: [
        { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop", alt: "Diverse Patient Demographics" },
        { src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop", alt: "Support Staff" },
        { src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop", alt: "Wellness & Lifestyle" }
      ]
    },
    {
      id: "community",
      title: "Community Engagement & Awareness",
      icon: <Camera className="w-6 h-6" />,
      images: [
        { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", alt: "Health Camps" },
        { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop", alt: "Workshops" },
        { src: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop", alt: "Awards & Recognitions" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-background)] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            A Glimpse into <span className="text-[var(--color-primary)]">Dr. Huma Ali's Practice</span>
          </h1>
          <h2 className="text-2xl font-medium text-[var(--color-secondary)] mb-6">
            State-of-the-Art Facilities at Sir Ganga Ram Hospital
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            Welcome to the gallery of Dr. Huma Ali, where we offer a visual representation of our commitment to women's health and the state-of-the-art facilities at Sir Ganga Ram Hospital (SGRH) in Central Delhi. This section is designed to provide patients with a comforting and informative visual experience, showcasing the professional environment and compassionate care they can expect.
          </p>
        </AnimateIn>

        {/* Gallery Sections */}
        <div className="space-y-24">
          {categories.map((category, idx) => (
            <div key={category.id}>
              <AnimateIn direction="up" className="flex items-center gap-4 mb-8 border-b border-[var(--color-muted)] pb-4">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-foreground)]">{category.title}</h2>
              </AnimateIn>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.images.map((image, imageIdx) => (
                  <AnimateIn key={imageIdx} direction="up" delay={imageIdx * 0.1}>
                    <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
