import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Povestea Aura</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto font-sans">
          Mai mult decât cafea, o stare de spirit.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <Image 
            src="/images/colombia-supremo.jpg"
            alt="Boabe de cafea proaspăt prăjite"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Misiunea Noastră</h2>
          <p className="text-gray-300 leading-relaxed font-sans">
            La Aura, credem că fiecare ceașcă de cafea este un ritual. O pauză. O conexiune. Misiunea noastră este să transformăm acest moment zilnic într-o experiență extraordinară. Căutăm în întreaga lume cele mai fine boabe de cafea de specialitate, lucrăm cu ferme mici, sustenabile, și aducem în prăjitoria noastră doar loturi care spun o poveste.
          </p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Valorile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Calitate</h3>
            <p className="text-gray-400 font-sans">De la fermă la ceașcă, fiecare pas este monitorizat pentru a asigura o calitate excepțională, fără compromisuri.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Sustenabilitate</h3>
            <p className="text-gray-400 font-sans">Colaborăm cu parteneri care respectă mediul și investesc în comunitățile locale, asigurând un viitor mai bun pentru toți.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Transparență</h3>
            <p className="text-gray-400 font-sans">Îți spunem povestea fiecărei cafele: originea, ferma, altitudinea și procesul de prăjire. Credem într-o relație onestă cu clienții noștri.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
