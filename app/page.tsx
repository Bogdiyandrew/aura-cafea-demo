"use client";

import ProductCard from "./components/ProductCard";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { allProducts } from "@/app/data/products"; // <-- 1. IMPORTĂM lista centrală

// Datele simulate pentru testimoniale
const testimonials = [
    { quote: "Cea mai bună cafea de specialitate pe care am băut-o în România...", author: "Andrei Popescu", title: "Pasionat de Cafea" },
    { quote: "Procesul de comandă a fost extrem de simplu, iar livrarea rapidă...", author: "Elena Ionescu", title: "Client Fidel" },
    { quote: "Aura a devenit ritualul meu de dimineață. O adevărată încântare.", author: "Mihai Georgescu", title: "Barista Acasă" }
];

// Variante de animație
const sectionContainerVariants: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants: Variants = { 
  hidden: { y: 20, opacity: 0 }, 
  visible: { y: 0, opacity: 1 }
};
const heroItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
}

export default function HomePage() {
  // 2. Selectăm primele 3 produse din lista centrală pentru a le afișa ca recomandări
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <main>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/coffee_making.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>

        <div className="relative z-10 text-center p-4 flex flex-col items-center">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4 tracking-tight text-aurora"
              style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Aura.
            </motion.h1>
            <motion.h2 
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]"
              style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.5)' }}
            >
              Cafea Artizanală.
            </motion.h2>
            <motion.p 
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="text-lg text-gray-200 max-w-2xl mx-auto mb-10 font-sans"
              style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.7)' }}
            >
              Descoperă o lume a aromelor pure, unde fiecare bob spune o poveste unică, de la origine până în ceașca ta.
            </motion.p>
            <motion.div
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <Link href="/products" className="bg-[var(--primary-accent)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500 shadow-lg shadow-black/30">
                Explorează Colecția
              </Link>
            </motion.div>
        </div>

        <motion.div className="absolute bottom-10 z-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/50"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12l-7.5 7.5-7.5-7.5" /></svg>
        </motion.div>
      </section>

      {/* Restul paginii */}
      <div className="bg-[var(--background)] relative z-10 space-y-24 py-24">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionContainerVariants}>
          <h2 className="text-4xl font-bold text-center mb-12">Recomandările Noastre</h2>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div key={product.slug} variants={itemVariants}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionContainerVariants}>
          <h2 className="text-4xl font-bold text-center mb-12">Ce spun clienții noștri</h2>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
                      <p className="font-sans text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                      <p className="font-sans font-bold text-white">{testimonial.author}</p>
                      <p className="font-sans text-sm text-gray-400">{testimonial.title}</p>
                  </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

