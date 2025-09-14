"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* --- HERO SECTION --- */}
      <motion.section 
        className="text-center pt-16 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Hai să vorbim.</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]">
          Suntem Aici Pentru Tine.
        </h2>
      </motion.section>
      
      {/* --- CARD UNIC DE CONTACT --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <div className="max-w-4xl mx-auto">
            <div 
                className="bg-white/5 border border-white/20 rounded-2xl p-8 lg:p-12 backdrop-blur-lg flex flex-col items-center text-center"
            >
                <h3 className="text-3xl font-bold mb-4">Ai o întrebare sau un proiect?</h3>
                <p className="text-gray-400 font-sans text-lg mb-8 max-w-2xl">Cea mai rapidă cale de a intra în legătură cu noi și de a discuta despre ideile tale este prin email sau telefon.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                    {/* Buton Email */}
                    <a 
                        href="mailto:suport@digitura.ro" 
                        className="bg-[var(--primary-accent)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500 whitespace-nowrap flex items-center justify-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        <span>suport@digitura.ro</span>
                    </a>
                    {/* Buton Telefon */}
                    <a 
                        href="tel:0750488329" 
                        className="bg-[var(--secondary-accent)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500 whitespace-nowrap flex items-center justify-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>
                        <span>0750 488 329</span>
                    </a>
                </div>
            </div>
        </div>
      </motion.section>
    </div>
  );
}

