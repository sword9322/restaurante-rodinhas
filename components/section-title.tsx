"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  light?: boolean
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {label && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl font-bold text-balance md:text-4xl lg:text-5xl ${
          light ? "text-card" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            light ? "text-card/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
