"use client"

import { motion } from "framer-motion"
import { Star, ExternalLink } from "lucide-react"
import { ReviewCard } from "./review-card"

const reviews = [
  {
    text: "Excelente escolha! Restaurante pequeno mas muito bom! Funcionários simpáticos e atenciosos. Comida de excelente qualidade. Marisco fresco e delicioso.",
    author: "Maria S.",
    rating: 5,
  },
  {
    text: "O restaurante encontra-se num sítio escondido mas vale a pena ir à sua procura. Bom marisco, ambiente familiar e preços justos.",
    author: "João P.",
    rating: 5,
  },
  {
    text: "Marisco de grande qualidade. Ótimo serviço. Boa relação qualidade/preço. Ao longo dos anos vai mantendo a excelência.",
    author: "Carlos M.",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center gap-6 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Avaliações
          </span>
          <h2 className="font-serif text-3xl font-bold text-card text-balance md:text-4xl lg:text-5xl">
            O Que Dizem os Nossos Clientes
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-bold text-card">5.0</span>
            <span className="text-sm text-card/60">
              1.104+ avaliações no TripAdvisor
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-card/10 px-4 py-2 text-sm text-card/80">
            <span className="font-semibold text-accent">#6</span>
            <span>de 215 restaurantes em Sesimbra</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.author} {...review} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://www.tripadvisor.pt/Restaurant_Review-g189163-d3178498-Reviews-O_Rodinhas-Sesimbra_Setubal_District_Alentejo.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-card/20 px-6 py-3 text-sm font-semibold text-card transition-all duration-200 hover:bg-card/10"
          >
            Ver no TripAdvisor
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
