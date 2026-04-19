"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center pb-20 pt-32 overflow-hidden bg-[#FAFAFA]"
      aria-labelledby="hero-title"
    >

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="z-10 flex w-full flex-col justify-center lg:w-[55%]">
            
            
            <h1
              id="hero-title"
              className="mb-8 font-serif text-5xl font-light leading-[1.05] tracking-tight text-textPrimary md:text-6xl lg:text-[5.5rem]"
            >
              <span className="block">Bespoke Beauty,</span>
              <span className="relative mt-2 block italic text-primary-700">
                Crafted by AI.
              </span>
            </h1>
            
            <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-textSecondary md:text-xl">
              Decode your skin &amp; hair&apos;s true needs. Our molecular AI analysis creates hyper-personalized protocols tailored to your exact biological profile.
            </p>
            
            <div className="flex flex-col gap-5 sm:flex-row items-center">
              <Link
                href="/analysis"
                className="group relative flex h-16 items-center justify-center overflow-hidden rounded-full bg-textPrimary px-10 font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
                <span className="relative z-10 text-base">Begin Analysis</span>
                <ArrowRight className="relative z-10 ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/how-it-works"
                className="group flex h-16 items-center justify-center gap-3 rounded-full px-8 font-medium text-textPrimary transition-all hover:bg-black/5 w-full sm:w-auto"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-textPrimary text-textPrimary transition-transform group-hover:scale-110">
                  <Play className="h-4 w-4 ml-1" />
                </div>
                <span>How it works</span>
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-[45%]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-black/5 shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop"
                alt="AI skin and hair analysis"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
             
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/20 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center text-white">
                      <span className="font-medium">Beauty Score</span>
                      <span className="font-serif italic font-light text-xl">96%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/30">
                      <div className="h-full w-[96%] rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-4xl font-light text-textPrimary md:text-5xl max-w-lg leading-tight">
            Curated by <span className="italic text-primary-600">Science</span>, Driven by Nature
          </h2>
          <Link href="/marketplace" className="hidden md:flex items-center gap-2 border-b border-textPrimary pb-1 font-medium text-textPrimary transition-all hover:text-primary-600 hover:border-primary-600">
            View All Collections <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Luminous Serums", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop", tags: ["Hydration", "Glow"] },
            { title: "Botanical Cleansers", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&auto=format&fit=crop", tags: ["Purify", "Soothe"] },
            { title: "Cellular Recovery", img: "https://images.unsplash.com/photo-1571781926291-c477eb31f859?w=600&auto=format&fit=crop", tags: ["Anti-Aging", "Repair"] },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface mb-6">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-textPrimary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-serif font-medium text-textPrimary group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="bg-textPrimary text-white py-32 rounded-[3rem] mx-4 md:mx-12 mb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?w=1200&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl font-light leading-tight md:text-6xl mb-8">
          &ldquo;The precision of AI merged with the purity of luxury skin &amp; hair care.&rdquo;
        </h2>
       
        <Link href="/analysis" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 font-medium text-textPrimary transition-all hover:bg-primary-50 hover:scale-105">
          Experience Now
        </Link>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  const communityImages = [
    { id: 1, url: "https://plus.unsplash.com/premium_photo-1708333927598-a13a4944de1c?w=900&auto=format&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1570473402477-673a4735d5ee?w=900&auto=format&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1712481846921-d5df6dc4abfd?w=900&auto=format&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1702312721545-2c4f66282080?w=900&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight text-textPrimary">
              <span className="block">Join Our</span>
              <span className="block mt-2 relative italic text-primary-600">
                Beauty Community
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-textSecondary font-light">
              Connect with like-minded women, share beauty tips, and participate
              in discussions about products, techniques, and experiences.
            </p>
            <ul className="space-y-4 mb-10">
              {["Beauty Forums", "Expert Q&A Sessions", "Product Reviews"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-4 bg-primary-50">
                    <span className="text-primary-600 text-sm">✧</span>
                  </div>
                  <span className="text-textPrimary">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/community"
              className="inline-flex items-center px-8 py-4 rounded-full bg-textPrimary text-white font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Join Community <ArrowRight size={18} className="ml-3" />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            {communityImages.map((img, index) => (
              <div
                key={img.id}
                className={`aspect-square rounded-2xl overflow-hidden shadow-sm ${index % 2 !== 0 ? 'translate-y-8' : ''}`}
              >
                <img src={img.url} alt={`Community image ${img.id}`} className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="rounded-[3rem] p-8 md:p-16 shadow-xl text-center max-w-5xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 relative overflow-hidden text-textPrimary">
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/40 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
              Join Our Beauty <span className="italic text-primary-600">Newsletter</span>
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto text-textSecondary font-light">
              Get personalized beauty tips, exclusive offers, and early access to
              new products.
            </p>

            <div className="flex flex-col sm:flex-row max-w-lg mx-auto shadow-sm rounded-3xl sm:rounded-full overflow-hidden bg-white p-1.5 focus-within:ring-2 focus-within:ring-primary-500/20">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 bg-transparent focus:outline-none text-textPrimary placeholder-textMuted w-full"
              />
              <button
                className="px-8 py-4 rounded-2xl sm:rounded-full text-white font-medium transition-all bg-primary-600 hover:bg-primary-700 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-6 text-textMuted">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Collections />
      <Experience />
      <CommunitySection />
      <Newsletter />
    </div>
  );
}