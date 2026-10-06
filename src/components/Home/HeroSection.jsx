function HeroSection() {
  return (
    <section className="js-hero-section flex min-h-screen flex-col justify-between bg-transparent px-6 pb-6 pt-28 text-[#d6ff00] md:px-12 md:pb-8 md:pt-32">
      
      <div className="flex flex-1 flex-col justify-center gap-10 md:flex-row md:items-end md:justify-between">
      
        <div className="js-hero-item self-start md:self-center">
          <p className="text-base leading-[1.03] tracking-[0.08em] md:text-2xl">
            COFFEE
            <br />
            SHOP
          </p>
        </div>

        <div className="js-hero-item max-w-5xl">
          <h1 className="text-left text-5xl font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-6xl md:text-right md:text-7xl lg:text-8xl">
            DON&apos;T TOSS IT,
            <br />
            TRANSFORM IT
          </h1>
        </div>
      
      </div>

      <div className="js-hero-item mt-10 flex flex-col gap-3 ml-auto text-[10px] uppercase tracking-[0.08em] text-zinc-400 md:mt-4 md:flex-row md:items-center md:justify-between md:text-xs">
        <p>
          DESIGNED AND DEVELOPED BY <span className="text-[#d6ff00]">Huzaifa</span>
        </p>
       
       
      </div>
    </section>
  )
}

export default HeroSection
