const CoffeeVideo = () => {
  return (
    <div className="relative my-16 h-96 w-full overflow-hidden rounded-lg shadow-2xl md:h-[500px]">
      {/* VIDEO absolut, ca în varianta cu inline styles */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/coffee-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/coffee_making.mp4" type="video/mp4" />
        Browser-ul tău nu suportă tag-ul video.
      </video>

      {/* Overlay + conținut */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
        <div className="p-4 text-center">
          <h2
            className="text-4xl font-extrabold leading-tight text-white md:text-6xl"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Ritualul Tău Zilnic, Reinventat.
          </h2>
          <p
            className="mt-4 max-w-2xl text-lg text-[var(--secondary-accent)] md:text-xl"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
          >
            Descoperă arome care transcend obișnuitul. Cafea de origine, prăjită cu măiestrie pentru tine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeVideo;