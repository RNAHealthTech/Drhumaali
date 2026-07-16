import AnimateIn from "@/components/AnimateIn";
import { BookOpen, ChevronRight, Activity, Baby, Sparkles } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Health Insights & Blogs | Dr. Huma Ali",
  description: "Empowering you through knowledge on women's health, gynaecology, obstetrics, and overall well-being.",
};

export default function BlogsPage() {
  const gynaecologyBlogs = blogs.filter(b => b.category === "Gynaecology");
  const obstetricsBlogs = blogs.filter(b => b.category === "Obstetrics");
  const generalBlogs = blogs.filter(b => b.category === "General Women's Health");

  const blogCategories = [
    {
      title: "Gynaecology",
      icon: <Activity className="w-5 h-5" />,
      articles: gynaecologyBlogs
    },
    {
      title: "Obstetrics",
      icon: <Baby className="w-5 h-5" />,
      articles: obstetricsBlogs
    },
    {
      title: "General Women's Health",
      icon: <Sparkles className="w-5 h-5" />,
      articles: generalBlogs
    }
  ].filter(c => c.articles.length > 0);

  return (
    <div className="py-20 bg-[var(--color-muted)]/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <AnimateIn direction="up" className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Dr. Huma Ali's <span className="text-[var(--color-primary)]">Health Insights</span>
          </h1>
          <h2 className="text-2xl font-medium text-[var(--color-secondary)] mb-6">
            Empowering You Through Knowledge
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-6">
            Welcome to the official blog of Dr. Huma Ali, your trusted Gynaecologist and Obstetrician at Sir Ganga Ram Hospital (SGRH) in Central Delhi. This space is dedicated to providing valuable, easy-to-understand, and evidence-based information on women's health, gynaecology, obstetrics, and overall well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[var(--color-primary)]">
            <span className="bg-[var(--color-primary-light)] px-4 py-2 rounded-full flex items-center gap-2"><BookOpen size={16}/> Educate & Inform</span>
            <span className="bg-[var(--color-primary-light)] px-4 py-2 rounded-full flex items-center gap-2"><BookOpen size={16}/> Promote Awareness</span>
            <span className="bg-[var(--color-primary-light)] px-4 py-2 rounded-full flex items-center gap-2"><BookOpen size={16}/> Support Your Journey</span>
          </div>
        </AnimateIn>

        {/* Blog Categories */}
        <div className="space-y-24">
          {blogCategories.map((category, idx) => (
            <div key={idx} className="max-w-6xl mx-auto">
              <AnimateIn direction="up" className="flex items-center gap-3 mb-10 border-b border-[var(--color-muted)] pb-4">
                <div className="w-10 h-10 bg-white shadow-sm border border-[var(--color-muted)] text-[var(--color-primary)] rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-foreground)]">{category.title}</h2>
              </AnimateIn>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.articles.map((article, articleIdx) => (
                  <AnimateIn key={articleIdx} direction="up" delay={articleIdx * 0.1}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-muted)] group h-full flex flex-col">
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">
                          {category.title}
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <p className="text-sm text-gray-400 font-medium mb-3">{article.date}</p>
                        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6 flex-1">
                          {article.excerpt}
                        </p>
                        <Link href={`/blogs/${article.slug}`} className="inline-flex items-center text-sm font-bold text-[var(--color-primary)] group-hover:gap-2 transition-all gap-1 mt-auto">
                          Read Article <ChevronRight size={16} />
                        </Link>
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
