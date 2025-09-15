import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products'; // Importăm tipul de date central

// Interfața de props este acum direct tipul Product
interface ProductCardProps extends Product {}

const ProductCard = ({ name, origin, price, imageUrl, slug, isSellable }: ProductCardProps) => {
  return (
    <Link href={`/product/${slug}`} className="block group">
      <div className="bg-white/5 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--primary-accent)]/20 backdrop-blur-lg">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`Imagine pentru cafeaua ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold font-serif text-white group-hover:text-[var(--primary-accent)] transition-colors">{name}</h3>
          <p className="text-gray-400 mt-1 font-sans text-sm">{origin}</p>
          
          {/* AICI ESTE LOGICA NOUĂ: Afișăm prețul doar dacă produsul e de vânzare */}
          {isSellable && price ? (
            <p className="text-lg font-bold text-white mt-4 font-sans">{price.toFixed(2)} RON</p>
          ) : (
            <p className="text-lg font-bold text-[var(--secondary-accent)] mt-4 font-sans">Disponibil în locație</p>
          )}

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;