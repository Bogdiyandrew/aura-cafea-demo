// Nu mai avem nevoie de "use client" sau toast, deoarece pagina devine statică

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <section className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">Hai să vorbim.</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto font-sans">
          Fie că ești un pasionat de cafea sau cauți un partener de încredere, suntem aici să te ascultăm.
        </p>
      </section>

      {/* Card centralizat pentru call-to-action */}
      <div className="bg-white/5 border border-white/20 rounded-2xl backdrop-blur-lg p-8 lg:p-12 text-center max-w-3xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-[var(--primary-accent)] mb-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>

        <h2 className="text-3xl font-bold mb-4">Pregătit să începem un proiect?</h2>
        <p className="text-gray-300 font-sans mb-8">
          Cel mai simplu mod de a intra în legătură cu noi este prin email. Scrie-ne despre ideea ta și îți vom răspunde în cel mai scurt timp.
        </p>
        
        <a 
          href="mailto:suport@digitura.ro"
          className="inline-block bg-[var(--primary-accent)] hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
        >
          suport@digitura.ro
        </a>
      </div>
    </div>
  );
}

