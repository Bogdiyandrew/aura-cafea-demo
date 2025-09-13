import ProductCard from "./components/ProductCard";
import CoffeeVideo from "./components/CoffeeVideo"; // Pasul 1: Importă componenta

// Simulare date produse...
const featuredProducts = [
  {
    name: 'Ethiopia Yirgacheffe',
    origin: 'Etiopia',
    price: 55.00,
    imageUrl: '/images/ethiopia-yirgacheffe.jpg',
    slug: 'ethiopia-yirgacheffe'
  },
  {
    name: 'Colombia Supremo',
    origin: 'Columbia',
    price: 49.50,
    imageUrl: '/images/colombia-supremo.jpg',
    slug: 'colombia-supremo'
  },
  {
    name: 'Sumatra Mandheling',
    origin: 'Indonezia',
    price: 62.00,
    imageUrl: '/images/sumatra-mandheling.jpg',
    slug: 'sumatra-mandheling'
  }
];


export default function HomePage() {
  return (
    <main>
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Aura. Cafea Artizanală.</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          O colecție curatoriată de cafele de specialitate, aduse din cele mai renumite regiuni ale lumii și prăjite local pentru o prospețime desăvârșită.
        </p>
      </section>

      {/* Pasul 2: Adaugă componenta aici */}
      <CoffeeVideo />

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Recomandările Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              origin={product.origin}
              price={product.price}
              imageUrl={product.imageUrl}
              slug={product.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}