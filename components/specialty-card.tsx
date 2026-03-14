"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface SpecialtyCardProps {
  image: string
  title: string
  description: string
  index: number
}

export function SpecialtyCard({
  image,
  title,
  description,
  index,
}: SpecialtyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
