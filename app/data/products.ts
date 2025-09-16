// Aici definim cum arată un obiect "produs"
export interface Product {
  name: string;
  origin: string;
  price?: number; // Prețul este acum opțional (are "?" la final)
  isSellable?: boolean; // O proprietate pentru a ști dacă e de vânzare
  imageUrl: string;
  slug: string;
  description: string;
  tastingNotes: string[];
}

// Aceasta este noua ta listă de produse. Aici vei face toate modificările.
export const allProducts: Product[] = [
  // --- PRODUS DE VÂNZARE ---
  {
    name: 'Cana de Cafea "Aura"',
    origin: 'Design Artizanal, România',
    price: 45.00,
    isSellable: true,
    imageUrl: '/images/aura-mug.png', // Asigură-te că adaugi o imagine pentru cană în `public/images`
    slug: 'cana-aura',
    description: 'Începe-ți fiecare dimineață cu stil. Cana "Aura" este fabricată din ceramică de înaltă calitate, cu un design minimalist și logo-ul nostru gravat subtil. Perfectă pentru a savura cafeaua preferată.',
    tastingNotes: ['Ceramică fină', 'Design minimalist', 'Logo gravat', 'Capacitate 350ml']
  },

  // --- PRODUSE DE PREZENTARE (NU SUNT DE VÂNZARE) ---
  {
    name: 'Iced Coffee',
    origin: 'Algeria (Mazagran), popularizat în Japonia și SUA',
    // Fără preț și isSellable (vor fi undefined)
    imageUrl: '/images/iced-coffee.jpg',
    slug: 'iced-coffee',
    description: 'O băutură răcoritoare, preparată din cafea fierbinte răcită rapid și servită peste cuburi de gheață. Gust echilibrat și revigorant.',
    tastingNotes: ['Cafea intensă', 'Note caramelizate', 'Răcoritor']
  },
  {
    name: 'Cold Brew',
    origin: 'Japonia (Kyoto-style), popularizat în SUA',
    imageUrl: '/images/cold-brew.webp',
    slug: 'cold-brew',
    description: 'O cafea preparată prin extracție lentă, la rece. Rezultatul este o băutură catifelată, cu aciditate scăzută și arome naturale mai dulci.',
    tastingNotes: ['Ciocolată', 'Nucă', 'Caramel dulce', 'Catifelat']
  },
  {
    name: 'Frappe',
    origin: 'Grecia',
    imageUrl: '/images/frappe3.webp',
    slug: 'frappe',
    description: 'Băutura iconică a Greciei, preparată din cafea instant sau espresso, spumă densă, gheață și lapte.',
    tastingNotes: ['Spumă cremoasă', 'Dulce echilibrat', 'Răcoritor']
  },
  {
  name: 'Affogato',
  origin: 'Italia',
  price: 22.00,
  imageUrl: '/images/affogato.jpg',
  slug: 'affogato',
  description: 'Un desert italian clasic, în care un shot fierbinte de espresso este turnat peste o cupă de înghețată de vanilie. Contrastul dintre cald și rece, amar și dulce, face din Affogato o experiență unică și rafinată.',
  tastingNotes: ['Espresso intens', 'Înghețată de vanilie', 'Amar-dulce', 'Cremos']
},
  {
  name: 'Irish Coffee',
  origin: 'Irlanda',
  price: 30.00,
  imageUrl: '/images/irish-cofee2.jpg',
  slug: 'irish-coffee',
  description: 'O combinație rafinată de cafea fierbinte, whiskey irlandez, zahăr brun și un strat generos de frișcă. O băutură clasică și elegantă, perfectă pentru serile relaxante sau pentru cei care apreciază un mix între cafea și cocktail.',
  tastingNotes: ['Cafea tare', 'Whiskey irlandez', 'Zahăr brun', 'Frișcă catifelată']
}
];