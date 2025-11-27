"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};


export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      <motion.section 
        className="text-center pt-16 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Povestea noastrǎ</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]">
          Fiecare bob spune o poveste.
        </h2>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: `0 0 40px 10px rgba(74, 144, 226, 0.2)` }}>
          <Image 
            src="/images/ethiopia-yirgacheffe.jpg" 
            alt="Boabe de cafea proaspăt prăjite"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Misiunea Aura</h2>
          <p className="text-gray-300 leading-relaxed font-sans text-lg">
            La Aura, credem că fiecare ceașcă de cafea este un ritual. O pauză. O conexiune. Misiunea noastră este să transformăm acest moment zilnic într-o experiență extraordinară.
          </p>
          <p className="text-gray-400 leading-relaxed font-sans">
            Căutăm în întreaga lume cele mai fine boabe de cafea de specialitate, lucrăm cu ferme mici, sustenabile, și aducem în prăjitoria noastră doar loturi care spun o poveste unică, de la origine până în ceașca ta.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Valorile care ne ghidează</h2>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <motion.div variants={cardVariants} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 text-[var(--primary-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-2xl font-bold mb-2">Calitate</h3>
            <p className="text-gray-400 font-sans">De la fermă la ceașcă, fiecare pas este monitorizat pentru a asigura o calitate excepțională, fără compromisuri.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg text-center flex flex-col items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 text-[var(--primary-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            <h3 className="text-2xl font-bold mb-2">Sustenabilitate</h3>
            <p className="text-gray-400 font-sans">Colaborăm cu parteneri care respectă mediul și investesc în comunitățile locale, asigurând un viitor mai bun pentru toți.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 text-[var(--primary-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            <h3 className="text-2xl font-bold mb-2">Transparență</h3>
            <p className="text-gray-400 font-sans">Îți spunem povestea fiecărei cafele: originea, ferma, altitudinea și procesul de prăjire. Credem într-o relație onestă.</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

