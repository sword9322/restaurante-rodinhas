"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { SectionTitle } from "./section-title"

const images = [
  { src: "/images/hero-seafood.jpg", alt: "Marisco fresco" },
  { src: "/images/choco-frito.jpg", alt: "Choco frito" },
  { src: "/images/gallery-1.jpg", alt: "Camarão grelhado" },
  { src: "/images/interior.jpg", alt: "Interior do restaurante" },
  { src: "/images/gallery-2.jpg", alt: "Cataplana de marisco" },
  { src: "/images/gallery-3.jpg", alt: "Exterior do restaurante" },
  { src: "/images/mariscos.jpg", alt: "Mariscos variados" },
  { src: "/images/gallery-4.jpg", alt: "Sobremesa tradicional" },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="galeria" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          label="Galeria"
          title="Momentos e Sabores"
          description="Conheça o nosso espaço e os pratos que fazem as delícias dos nossos clientes."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, index) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg"
              aria-label={`Ver imagem: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/20" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-card transition-colors hover:bg-card/30"
              aria-label="Fechar lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-xl md:aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
