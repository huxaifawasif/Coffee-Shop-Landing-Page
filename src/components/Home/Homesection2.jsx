import { MagicText } from "../ui/magic-text"

export const Homesection2 = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-transparent px-6 pb-12 text-white md:px-12 md:pb-16">
      <div className="w-full max-w-5xl text-[#d6ff00]">
        <MagicText
          text="Bangkok produces over 100,000,000,000 grams of coffee waste each year. Left untreated, it adds to pollution and landfill overflow. Coffee Shop shows how small daily choices, starting with your coffee, can turn waste into compost, urban farms, and a greener city."
        />
      </div>
    </section>
  )
}
