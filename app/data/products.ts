// app/data/products.ts

// Aici definim cum arată un obiect "produs"
export interface Product {
  name: string;
  origin: string;
  price: number;
  imageUrl: string;
  slug: string;
  description: string;
  tastingNotes: string[];
}

// Aceasta este lista ta de produse. AICI vei face toate modificările.
export const allProducts: Product[] = [
  {
  name: 'Iced Coffee',
  origin: 'Algeria (Mazagran), popularizat ulterior în Japonia și SUA',
  price: 20.00,
  imageUrl: '/images/iced-coffee.jpg',
  slug: 'iced-coffee',
  description: 'O băutură răcoritoare, preparată din cafea fierbinte răcită rapid și servită peste cuburi de gheață. Gust echilibrat, intensitatea cafelei este păstrată, dar senzația este mai ușoară și revigorantă.',
  tastingNotes: ['Cafea intensă', 'Note caramelizate', 'Amăreală plăcută', 'Răcoritor']
},
  {
  name: 'Cold Brew',
  origin: 'Japonia (Kyoto-style), popularizat în SUA',
  price: 22.00,
  imageUrl: '/images/cold-brew.webp',
  slug: 'cold-brew',
  description: 'O cafea preparată prin extracție lentă, la rece, timp de 12–24 de ore. Rezultatul este o băutură catifelată, cu aciditate scăzută și arome naturale mai dulci. Perfectă pentru zilele calde și pentru cei care preferă o cafea mai blândă, dar intensă.',
  tastingNotes: ['Ciocolată', 'Nucă', 'Caramel dulce', 'Catifelat']
},
  {
  name: 'Frappe',
  origin: 'Grecia',
  price: 18.00,
  imageUrl: '/images/frappe3.webp',
  slug: 'frappe',
  description: 'Băutura iconică a Greciei, preparată din cafea instant sau espresso, spumă densă, gheață și lapte. Este o alegere răcoritoare și energizantă, perfectă pentru zilele călduroase sau pentru cei care preferă o cafea mai lejeră și dulce.',
  tastingNotes: ['Cafea intensă', 'Spumă cremoasă', 'Dulce echilibrat', 'Răcoritor']
},
  // --- AICI POȚI ADĂUGA UN PRODUS NOU ---
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
