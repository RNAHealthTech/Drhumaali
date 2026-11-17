import type { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import React from "react";

// Generate static params for all blogs
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} | Dr. Huma Ali`,
    description: blog.excerpt,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://drhumaligynae.com/blogs/${slug}`,
    },
    openGraph: {
      title: `${blog.title} | Dr. Huma Ali`,
      description: blog.excerpt,
      url: `https://drhumaligynae.com/blogs/${slug}`,
      type: "article",
    },
  };
}

// Advanced markdown parser for premium typography
function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let isList = false;

  const pushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-6 mb-8 space-y-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed marker:text-[var(--color-primary)]">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('- **') || trimmed.startsWith('- ')) {
      isList = true;
      let text = trimmed.replace(/^- /, '');
      const parts = text.split(/\*\*(.*?)\*\*/g);
      listItems.push(
        <li key={index} className="pl-2">
          {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part}</strong> : part))}
        </li>
      );
    } else if (/^\\d+\\.\\s/.test(trimmed)) {
       isList = true;
       let text = trimmed.replace(/^\\d+\\.\\s/, '');
       const parts = text.split(/\*\*(.*?)\*\*/g);
       listItems.push(
         <li key={index} className="list-decimal ml-2 pl-2 mb-3">
           {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part}</strong> : part))}
         </li>
       );
    } else {
      pushList();
      isList = false;

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <div key={index} className="flex items-center gap-4 mt-16 mb-8">
            <h2 className="text-3xl font-extrabold text-[var(--color-primary)] tracking-tight">
              {trimmed.replace('## ', '')}
            </h2>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
        );
      } else if (trimmed !== '') {
        const parts = trimmed.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <p key={index} className="mb-6 text-lg leading-loose text-gray-700 dark:text-gray-300">
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part}</strong> : part))}
          </p>
        );
      }
    }
  });

  pushList();
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Find related articles (same category, excluding current)
  const relatedBlogs = blogs
    .filter(b => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20">
      {/* Premium Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover opacity-[0.15] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimateIn direction="down" className="max-w-4xl mx-auto">
            <Link href="/blogs" className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] mb-8 transition-colors font-bold text-sm bg-white dark:bg-[var(--color-card)] px-4 py-2 rounded-full shadow-sm border border-[var(--color-muted)] hover:shadow-md">
              <ChevronLeft size={16} className="mr-1" /> Back to all articles
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                {blog.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm font-medium">
                <Clock size={14} /> 5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-[1.15] tracking-tight mb-8">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                 <img src="https://sgrh.com/assets/img/profile/gab2780.png" alt="Dr. Huma Ali" className="w-full h-full object-cover object-top bg-gray-100 dark:bg-slate-800" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">Dr. Huma Ali</p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                  <Calendar size={14} />
                  {blog.date}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <AnimateIn direction="up" delay={0.2} className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[21/9] md:aspect-[21/9] bg-gray-100 dark:bg-slate-800">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateIn>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Social Share (Desktop Sidebar) */}
          <div className="hidden lg:block w-16 shrink-0">
            <div className="sticky top-32 flex flex-col items-center gap-4 bg-white dark:bg-[var(--color-card)] py-6 rounded-full shadow-sm border border-gray-100 dark:border-slate-800">
              <span className="text-xs font-bold text-gray-400 mb-2 -rotate-90 my-4">SHARE</span>
              <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors mt-2 border border-gray-200 dark:border-slate-700">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="flex-1 max-w-3xl mx-auto w-full">
            <AnimateIn direction="up" delay={0.3}>
              <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-12 leading-relaxed p-8 bg-white dark:bg-[var(--color-card)] rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 border-l-4 border-l-[var(--color-primary)]">
                "{blog.excerpt}"
              </p>
              
              <div className="blog-content">
                {renderMarkdown(blog.content)}
              </div>

              {/* Tags and Mobile Share */}
              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {blog.keywords.split(',').map((kw, i) => (
                    <span key={i} className="bg-white dark:bg-[var(--color-card)] border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                      #{kw.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex lg:hidden items-center gap-3">
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Share:</span>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-full bg-white dark:bg-[var(--color-card)] border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
                    <button className="w-9 h-9 rounded-full bg-white dark:bg-[var(--color-card)] border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></button>
                    <button className="w-9 h-9 rounded-full bg-white dark:bg-[var(--color-card)] border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></button>
                  </div>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="mt-12 p-8 bg-white dark:bg-[var(--color-card)] rounded-3xl shadow-md border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-gray-50 shadow-inner">
                  <img src="https://sgrh.com/assets/img/profile/gab2780.png" alt="Dr. Huma Ali" className="w-full h-full object-cover object-top bg-gray-100 dark:bg-slate-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Written by Dr. Huma Ali</h4>
                  <p className="text-[var(--color-primary)] font-medium text-sm mb-4">Obstetrician & Gynaecologist at Sir Ganga Ram Hospital</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                    Dr. Huma Ali is dedicated to empowering women through knowledge. With extensive experience in comprehensive women's health, she provides compassionate, expert care for patients across Central Delhi.
                  </p>
                  <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md text-sm">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white dark:bg-[var(--color-card)] py-20 border-t border-gray-100 dark:border-slate-800 mt-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 text-center">More on {blog.category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedBlogs.map((article, idx) => (
                  <AnimateIn key={idx} direction="up" delay={idx * 0.1}>
                    <Link href={`/blogs/${article.slug}`} className="group block bg-gray-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-gray-400 font-bold mb-2 uppercase tracking-wider">{article.date}</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
