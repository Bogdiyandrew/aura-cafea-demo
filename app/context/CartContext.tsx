"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/app/data/products';

interface CartItem extends Product {
  quantity: number;
  price: number; // întotdeauna number în coș
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (slug: string) => void;
  removeFromCart: (slug: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Type guard: îngustează tipul la un product cu price: number
function hasPrice(p: Product): p is Product & { price: number } {
  return typeof p.price === 'number';
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    if (!hasPrice(product)) return; // ieșim dacă nu are preț

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.slug === product.slug);
      if (existingItem) {
        return prevItems.map(item =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // aici TS știe sigur că product.price e number
      return [...prevItems, { ...product, quantity: 1, price: product.price }];
    });
  };

  const decreaseQuantity = (slug: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.slug === slug);
      if (existingItem?.quantity === 1) {
        return prevItems.filter(item => item.slug !== slug);
      }
      return prevItems.map(item =>
        item.slug === slug
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

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
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};