"use client";

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/5 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-serif text-white tracking-wider">
          AURA
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-gray-200 font-sans">
          <Link href="/" className="hover:text-white transition-colors duration-300">Acasă</Link>
          <Link href="/products" className="hover:text-white transition-colors duration-300">Produse</Link>
          <Link href="/about" className="hover:text-white transition-colors duration-300">Povestea Noastră</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
        </div>
        
        <Link 
          href="/cart" 
          className="bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-px"
        >
          Coș ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;