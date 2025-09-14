"use client";

import ProductCard from "@/app/components/ProductCard";
import { motion } from "framer-motion";

const allProducts = [
    { name: 'Ethiopia Yirgacheffe', origin: 'Etiopia', price: 55.00, imageUrl: '/images/ethiopia-yirgacheffe.jpg', slug: 'ethiopia-yirgacheffe' },
    { name: 'Colombia Supremo', origin: 'Columbia', price: 49.50, imageUrl: '/images/colombia-supremo.jpg', slug: 'colombia-supremo' },
    { name: 'Sumatra Mandheling', origin: 'Indonezia', price: 62.00, imageUrl: '/images/sumatra-mandheling.jpg', slug: 'sumatra-mandheling' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Colecția Noastră de Cafea</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto font-sans">
          Fiecare bob este o promisiune. Descoperă arome unice din cele mai renumite colțuri ale lumii, prăjite cu grijă pentru a-ți oferi o experiență desăvârșită.
        </p>
      </section>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allProducts.map((product) => (
          <motion.div key={product.slug} variants={itemVariants}>
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
