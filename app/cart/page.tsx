"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
            <h1 className="text-5xl font-bold">Coșul tău</h1>
        </section>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-500 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.841a1.125 1.125 0 00-.84-1.433H5.25z" />
          </svg>
          <p className="text-gray-400 font-sans text-lg">Coșul tău este gol.</p>
          <Link href="/products" className="mt-6 inline-block bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105">
            Vezi Produsele
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-lg p-6 space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.slug} className={`flex items-center gap-4 py-4 ${index < cartItems.length - 1 ? 'border-b border-white/10' : ''}`}>
                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <h2 className="font-semibold text-lg font-serif text-white">{item.name}</h2>
                  <p className="text-gray-400 text-sm font-sans">{item.price.toFixed(2)} RON</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => decreaseQuantity(item.slug)} className="bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full font-bold transition-all duration-200 hover:scale-110 cursor-pointer">-</button>
                  <span className="font-semibold text-lg w-8 text-center font-sans">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full font-bold transition-all duration-200 hover:scale-110 cursor-pointer">+</button>
                </div>
                <div className="font-bold text-lg w-24 text-right font-sans text-white">
                  {(item.price * item.quantity).toFixed(2)} RON
                </div>
                <button onClick={() => removeFromCart(item.slug)} className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/20 rounded-2xl backdrop-blur-lg p-6 sticky top-28">
            <h2 className="text-2xl font-semibold mb-6 font-serif text-white">Sumar Comandă</h2>
            <div className="space-y-4 font-sans">
                <div className="flex justify-between text-lg text-gray-300">
                <span>Subtotal:</span>
                <span>{totalPrice.toFixed(2)} RON</span>
                </div>
                <div className="flex justify-between text-lg text-gray-300">
                <span>Livrare:</span>
                <span>Gratuită</span>
                </div>
                <div className="border-t border-white/20 my-4"></div>
                <div className="flex justify-between text-xl font-bold text-white">
                <span>Total:</span>
                <span>{totalPrice.toFixed(2)} RON</span>
                </div>
            </div>
            <button className="mt-8 w-full bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-px cursor-pointer">
              Finalizează Comanda
            </button>
          </div>
        </div>
      )}
    </div>
  );
}