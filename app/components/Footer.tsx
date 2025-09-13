const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 mt-16 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="text-xl font-bold text-amber-100 mb-2 tracking-wider">AURA</p>
        <p>&copy; {new Date().getFullYear()} Aura Cafea Artizanală. Toate drepturile rezervate.</p>
        <p className="mt-2">Un demo creat cu mândrie de <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">digitura.ro</a></p>
      </div>
    </footer>
  );
};

export default Footer;