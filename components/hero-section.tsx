"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-seafood.jpg"
        alt="Marisco fresco no restaurante O Rodinhas"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex max-w-3xl flex-col items-center gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Sesimbra, Portugal
          </span>

          <h1 className="font-serif text-4xl font-bold leading-tight text-card text-balance md:text-5xl lg:text-7xl">
            Marisqueira Tradicional desde 1992
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-card/80 md:text-lg">
            Choco frito, mariscos frescos e petiscos regionais. Uma
            experiência gastronómica autêntica junto ao mar.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-lg"
            >
              Ver Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:+351212233456"
              className="rounded-lg border-2 border-card/30 px-7 py-3.5 text-sm font-semibold text-card transition-all duration-200 hover:border-card/60 hover:bg-card/10"
            >
              Reservar Mesa
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-card/30 p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-card/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
