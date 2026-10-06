const Marquee = () => {
  const text = "DON'T FORGET YOUR COFFEE CAN DO MORE"

  return (
    <section className="marquee w-full overflow-hidden bg-[#E2FC07] py-6">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center gap-10">
            {Array.from({ length: 10 }).map((__, i) => (
              <span
                key={`${repeatIndex}-${i}`}
                className="text-2xl font-black uppercase tracking-[0.12em] text-black sm:text-3xl md:text-4xl"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee