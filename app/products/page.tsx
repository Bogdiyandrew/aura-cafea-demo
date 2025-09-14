"use client";

import ProductCard from "@/app/components/ProductCard";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // <-- AICI ESTE CORECTURA: Am adăugat importul lipsă

// Datele simulate
const allProducts = [
  { name: 'Ethiopia Yirgacheffe', origin: 'Etiopia', price: 55.00, imageUrl: '/images/ethiopia-yirgacheffe.jpg', slug: 'ethiopia-yirgacheffe' },
  { name: 'Colombia Supremo', origin: 'Columbia', price: 49.50, imageUrl: '/images/colombia-supremo.jpg', slug: 'colombia-supremo' },
  { name: 'Sumatra Mandheling', origin: 'Indonezia', price: 62.00, imageUrl: '/images/sumatra-mandheling.jpg', slug: 'sumatra-mandheling' }
];

// Variante de animație
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ProductsPage() {
  const featuredProduct = allProducts[1]; // Alegem Colombia Supremo ca produs recomandat

  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* --- HERO SECTION --- */}
      <motion.section 
        className="text-center pt-16 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Colecția Noastră</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]">
          Descoperă Aroma Perfectă
        </h2>
      </motion.section>

      {/* --- PRODUSUL RECOMANDAT --- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image src={featuredProduct.imageUrl} alt={featuredProduct.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-sans uppercase tracking-widest text-[var(--primary-accent)] mb-2">Recomandarea Lunii</span>
            <h3 className="text-4xl font-bold mb-4">{featuredProduct.name}</h3>
            <p className="text-gray-400 font-sans mb-6">
              Un clasic perfect echilibrat, cu note catifelate de ciocolată și caramel. Alegerea ideală pentru a începe orice zi cu o notă de rafinament.
            </p>
            <Link href={`/product/${featuredProduct.slug}`} className="bg-[var(--secondary-accent)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500">
              Vezi Detalii
            </Link>
          </div>
        </div>
      </motion.section>

      {/* --- TOATE PRODUSELE --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Explorează Toate Sortimentele</h2>
        </div>
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProducts.map((product) => (
            <motion.div key={product.slug} variants={itemVariants}>
              <ProductCard
                name={product.name}
                origin={product.origin}
                price={product.price}
                imageUrl={product.imageUrl}
                slug={product.slug}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

