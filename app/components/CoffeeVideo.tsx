const CoffeeVideo = () => {
  return (
    <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-lg my-16 shadow-2xl shadow-black/60">
      {/* Video-ul de fundal */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        poster="/images/coffee-poster.jpg" // O imagine afișată până se încarcă video-ul
      >
        <source src="/videos/coffee_making.mp4" type="video/mp4" />
        Browser-ul tău nu suportă tag-ul video.
      </video>

      {/* Suprapunerea cu text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 p-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Ritualul Tău Zilnic, Reinventat.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--secondary-accent)] max-w-2xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
          Descoperă arome care transcend obișnuitul. Cafea de origine, prăjită cu măiestrie pentru tine.
        </p>
      </div>
    </div>
  );
};

export default CoffeeVideo;