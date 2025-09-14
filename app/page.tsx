"use client";

import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";

// ... (datele simulate și variantele de animație rămân la fel) ...
const featuredProducts = [
  { name: 'Ethiopia Yirgacheffe', origin: 'Etiopia', price: 55.00, imageUrl: '/images/ethiopia-yirgacheffe.jpg', slug: 'ethiopia-yirgacheffe' },
  { name: 'Colombia Supremo', origin: 'Columbia', price: 49.50, imageUrl: '/images/colombia-supremo.jpg', slug: 'colombia-supremo' },
  { name: 'Sumatra Mandheling', origin: 'Indonezia', price: 62.00, imageUrl: '/images/sumatra-mandheling.jpg', slug: 'sumatra-mandheling' }
];
const testimonials = [
    { quote: "Cea mai bună cafea de specialitate pe care am băut-o în România...", author: "Andrei Popescu", title: "Pasionat de Cafea" },
    { quote: "Procesul de comandă a fost extrem de simplu, iar livrarea rapidă...", author: "Elena Ionescu", title: "Client Fidel" },
    { quote: "Aura a devenit ritualul meu de dimineață. O adevărată încântare.", author: "Mihai Georgescu", title: "Barista Acasă" }
];
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 }};

export default function HomePage() {
  return (
    // Acum <main> nu mai are padding, deci putem scoate acest div
    <>
      {/* --- HERO SECTION FULL-SCREEN (fără container) --- */}
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline poster="/images/coffee-poster.jpg" className="h-full w-full object-cover">
            <source src="/videos/coffee_making.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <motion.div className="relative z-10 text-center p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">Aura.</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]">Cafea Artizanală.</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10 font-sans">O colecție curatoriată de cafele de specialitate, aduse din cele mai renumite regiuni ale lumii.</p>
          <Link href="/products" className="bg-[var(--primary-accent)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500">Explorează Colecția</Link>
        </motion.div>
        <motion.div className="absolute bottom-10 z-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/50"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12l-7.5 7.5-7.5-7.5" /></svg>
        </motion.div>
      </section>

      {/* --- Container pentru restul conținutului paginii (cu padding) --- */}
      <div className="bg-[var(--background)] relative z-10 space-y-24 py-24">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
          <h2 className="text-4xl font-bold text-center mb-12">Recomandările Noastre</h2>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div key={product.slug} variants={itemVariants}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
          <h2 className="text-4xl font-bold text-center mb-12">Ce spun clienții noștri</h2>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
                      <p className="font-sans text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                      <p className="font-sans font-bold text-white">{testimonial.author}</p>
                      <p className="font-sans text-sm text-gray-400">{testimonial.title}</p>
                  </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}