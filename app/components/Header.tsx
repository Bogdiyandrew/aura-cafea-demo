"use client";

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const headerVariants: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8, 
      ease: [0.6, 0.05, 0.01, 0.99] 
    }
  }
};


const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", name: "Acasă" },
    { href: "/products", name: "Produse" },
    { href: "/about", name: "Povestea noastrǎ" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"

      className={`sticky top-0 z-50 transition-all duration-500 ${
        hasScrolled 
        ? 'bg-black/40 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-serif text-white tracking-wider">
          AURA
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-gray-300 font-sans">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative hover:text-white transition-colors duration-300">
              {link.name}
              {pathname === link.href && (
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-accent)]"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        
        <Link 
          href="/cart" 
          className="bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-px"
        >
          Coș ({totalItems})
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
