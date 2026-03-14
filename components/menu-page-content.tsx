"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MenuCategory } from "./menu-category"

const categories = [
  {
    id: "mariscos",
    title: "Mariscos",
    items: [
      {
        name: "Amêijoas à Bulhão Pato",
        description: "Amêijoas frescas com azeite, alho, coentros e vinho branco",
        price: "P.V.",
      },
      {
        name: "Gambas ao Alho",
        description: "Gambas salteadas com alho, azeite e malagueta",
        price: "P.V.",
      },
      {
        name: "Camarão Grelhado",
        description: "Camarão fresco grelhado com sal grosso e limão",
        price: "P.V.",
      },
      {
        name: "Percebes",
        description: "Percebes frescos cozidos ao natural",
        price: "P.V.",
      },
      {
        name: "Lagosta Grelhada",
        description: "Lagosta fresca grelhada com manteiga de limão",
        price: "P.V.",
      },
      {
        name: "Sapateira Recheada",
        description: "Sapateira fresca recheada com o seu próprio miolo",
        price: "P.V.",
      },
      {
        name: "Arroz de Marisco",
        description: "Arroz caldoso com variedade de mariscos frescos",
        price: "P.V.",
      },
    ],
  },
  {
    id: "petiscos",
    title: "Petiscos",
    items: [
      {
        name: "Choco Frito",
        description:
          "A especialidade da casa. Choco fresco frito com panagem dourada e crocante",
        price: "P.V.",
      },
      {
        name: "Caracóis",
        description: "Caracóis temperados com ervas aromáticas, alho e manteiga",
        price: "P.V.",
      },
      {
        name: "Caracoletas Fritas",
        description: "Caracoletas fritas estaladiças, uma iguaria da casa",
        price: "P.V.",
      },
      {
        name: "Pataniscas de Bacalhau",
        description: "Pataniscas de bacalhau com arroz de feijão",
        price: "P.V.",
      },
      {
        name: "Peixinhos da Horta",
        description: "Feijão verde em massa crocante, temperado com sal marinho",
        price: "P.V.",
      },
      {
        name: "Tábua de Queijos e Enchidos",
        description: "Seleção de queijos e enchidos regionais",
        price: "P.V.",
      },
    ],
  },
  {
    id: "carnes",
    title: "Carnes",
    items: [
      {
        name: "Bife à Rodinhas",
        description: "Bife da casa com molho especial e batatas fritas caseiras",
        price: "P.V.",
      },
      {
        name: "Francesinha",
        description:
          "A clássica francesinha com molho picante, acompanhada de batatas fritas",
        price: "P.V.",
      },
      {
        name: "Costeleta de Porco Grelhada",
        description: "Costeleta de porco grelhada com arroz e salada",
        price: "P.V.",
      },
      {
        name: "Frango Grelhado",
        description: "Frango grelhado com piri-piri e batatas assadas",
        price: "P.V.",
      },
      {
        name: "Espetada Mista",
        description: "Espetada de carnes mistas grelhadas na brasa",
        price: "P.V.",
      },
    ],
  },
  {
    id: "saladas",
    title: "Saladas",
    items: [
      {
        name: "Salada Mista",
        description: "Alface, tomate, cebola e pepino com vinagrete da casa",
        price: "P.V.",
      },
      {
        name: "Salada de Polvo",
        description: "Polvo cozido com cebola, pimento, coentros e azeite",
        price: "P.V.",
      },
      {
        name: "Salada de Tomate e Queijo Fresco",
        description: "Tomate, queijo fresco, orégãos e azeite virgem extra",
        price: "P.V.",
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      {
        name: "Mousse de Chocolate",
        description: "Mousse de chocolate negro caseira",
        price: "P.V.",
      },
      {
        name: "Pudim Caseiro",
        description: "Pudim flan tradicional feito em casa",
        price: "P.V.",
      },
      {
        name: "Serradura",
        description: "Sobremesa tradicional portuguesa com natas e bolacha maria",
        price: "P.V.",
      },
      {
        name: "Fruta da Época",
        description: "Seleção de frutas frescas da época",
        price: "P.V.",
      },
    ],
  },
]

const tabs = categories.map((c) => ({ id: c.id, label: c.title }))

export function MenuPageContent() {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active
    ? categories.filter((c) => c.id === active)
    : categories

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/hero-seafood.jpg"
          alt="Menu do restaurante O Rodinhas"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              O Rodinhas
            </span>
            <h1 className="font-serif text-4xl font-bold text-card md:text-5xl lg:text-6xl">
              O Nosso Menu
            </h1>
            <p className="max-w-md text-base text-card/80">
              Sabores tradicionais, ingredientes frescos e receitas com história.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-3 scrollbar-none">
          <button
            onClick={() => setActive(null)}
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === null
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-10">
            {filtered.map((category, index) => (
              <MenuCategory
                key={category.id}
                title={category.title}
                items={category.items}
                index={index}
              />
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            P.V. = Preço Variável (consultar no momento). Preços sujeitos a
            alteração conforme a disponibilidade e frescura dos produtos.
          </motion.p>
        </div>
      </section>
    </>
  )
}
