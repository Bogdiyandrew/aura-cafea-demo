import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-100 tracking-wider">
          AURA
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/" className="hover:text-amber-200 transition-colors duration-300">Acasă</Link>
          <Link href="/products" className="hover:text-amber-200 transition-colors duration-300">Produse</Link>
          <Link href="/about" className="hover:text-amber-200 transition-colors duration-300">Povestea Noastră</Link>
        </div>
        <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-5 rounded-full transition-colors duration-300">
          Coș (0)
        </button>
      </nav>
    </header>
  );
};

export default Header;