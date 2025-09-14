const Footer = () => {
  return (
    <footer className="bg-black/50 mt-16 py-8 border-t border-white/20">
      <div className="container mx-auto px-6 text-center text-gray-400">
        
        {/* Secțiunea de disclaimer */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <h3 className="font-bold text-white mb-2 font-sans">ATENȚIE</h3>
          <p className="max-w-2xl mx-auto text-sm">
            Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare. Nu reprezintă un magazin real și nu reflectă întregul potențial al serviciilor oferite de 
            <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline mx-1">digitura.ro</a>.
          </p>
        </div>

        {/* Informațiile standard */}
        <p className="text-xl font-bold font-serif text-white mb-2 tracking-wider">AURA</p>
        <p className="font-sans">&copy; {new Date().getFullYear()} Aura Cafea Artizanală. Toate drepturile rezervate.</p>
        <p className="mt-2 font-sans">Un demo creat cu mândrie pentru <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">digitura.ro</a></p>

      </div>
    </footer>
  );
};

export default Footer;
