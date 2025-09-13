import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  origin: string;
  price: number;
  imageUrl: string;
  slug: string;
}

const ProductCard = ({ name, origin, price, imageUrl, slug }: ProductCardProps) => {
  return (
    <Link href={`/product/${slug}`} className="block group bg-gray-900/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={`Imagine pentru cafeaua ${name}`}
          fill // Folosim 'fill' în loc de layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }} // 'objectFit' se trece acum prin 'style'
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--secondary-accent)] group-hover:text-[var(--primary-accent)] transition-colors">{name}</h3>
        <p className="text-gray-400 mt-1">{origin}</p>
        <p className="text-lg font-bold text-white mt-4">{price.toFixed(2)} RON</p>
      </div>
    </Link>
  );
};

export default ProductCard;