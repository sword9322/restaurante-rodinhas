"use client"

import { SectionTitle } from "./section-title"
import { SpecialtyCard } from "./specialty-card"

const specialties = [
  {
    image: "/images/choco-frito.jpg",
    title: "Choco Frito",
    description:
      "A grande especialidade da casa. Choco fresco, frito na perfeição com uma panagem dourada e crocante.",
  },
  {
    image: "/images/mariscos.jpg",
    title: "Mariscos Frescos",
    description:
      "Grande variedade de mariscos sempre frescos. Amêijoas, camarão, percebes e muito mais.",
  },
  {
    image: "/images/petiscos.jpg",
    title: "Petiscos Tradicionais",
    description:
      "Caracóis, caracoletas fritas, pataniscas e outros petiscos típicos da região.",
  },
  {
    image: "/images/carnes.jpg",
    title: "Carnes Grelhadas",
    description:
      "Seleção de carnes grelhadas preparadas com temperos tradicionais e acompanhamentos regionais.",
  },
]

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          label="Especialidades"
          title="Sabores da Tradição"
          description="Descubra os pratos que fazem do Rodinhas uma referência gastronómica em Sesimbra há mais de 30 anos."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <SpecialtyCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
