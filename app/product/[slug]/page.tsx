"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import toast from 'react-hot-toast';
import { allProducts } from '@/app/data/products'; // <-- IMPORTĂM lista centrală

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug;
  const { addToCart } = useCart();

  // Căutăm produsul în lista centrală
  const product = allProducts.find((p) => p.slug === slug);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} a fost adăugat în coș!`);
    }
  };

  if (!product) {
    // Mesaj de încărcare/eroare
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-2xl font-bold">Se încarcă produsul...</h1>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coloana cu imaginea, cu efect de "glow" */}
        <div 
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: `0 0 30px 5px var(--secondary-accent)` }}
        >
            <Image
            src={product.imageUrl}
            alt={`Imagine pentru cafeaua ${product.name}`}
            fill
            className="object-cover"
            priority
            />
        </div>

        {/* Coloana cu detalii, cu efect de glassmorphism */}
        <div className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-lg text-gray-400 -mt-2 font-sans">{product.origin}</p>
            
            <p className="text-4xl font-bold text-white my-4 font-sans">{product.price.toFixed(2)} RON</p>
            
            <p className="text-gray-300 leading-relaxed font-sans">{product.description}</p>

            <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">Note de degustare:</h3>
            <div className="flex flex-wrap gap-2 mt-3">
                {product.tastingNotes.map(note => (
                <span key={note} className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm font-sans">
                    {note}
                </span>
                ))}
            </div>
            </div>
            
            <button 
            onClick={handleAddToCart}
            className="mt-8 bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-full text-lg w-full transition-all duration-300 hover:scale-105 hover:-translate-y-px"
            >
            Adaugă în Coș
            </button>
        </div>
        </div>
    </div>
  );
}

