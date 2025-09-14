"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipurile de date (rămân la fel)
interface Product {
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Adăugăm noile funcții la tipul contextului
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (product: Product) => void; // <-- NOU
  removeFromCart: (slug: string) => void; // <-- NOU
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.slug === product.slug);
      if (existingItem) {
        return prevItems.map(item =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // NOU: Funcție pentru a scădea cantitatea
  const decreaseQuantity = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.slug === product.slug);
      if (existingItem && existingItem.quantity > 1) {
        // Dacă sunt mai multe bucăți, scade cantitatea
        return prevItems.map(item =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // Dacă este doar o bucată, șterge produsul complet
      return prevItems.filter(item => item.slug !== product.slug);
    });
  };

  // NOU: Funcție pentru a șterge un produs, indiferent de cantitate
  const removeFromCart = (slug: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.slug !== slug));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart trebuie folosit în interiorul unui CartProvider');
  }
  return context;
};