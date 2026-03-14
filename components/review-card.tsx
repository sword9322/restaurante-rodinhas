"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface ReviewCardProps {
  text: string
  author: string
  rating: number
  index: number
}

export function ReviewCard({ text, author, rating, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col gap-4 rounded-xl bg-card p-8 shadow-sm"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-accent text-accent"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="flex-1 text-sm italic leading-relaxed text-muted-foreground">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {author[0]}
        </div>
        <span className="text-sm font-medium text-foreground">{author}</span>
      </div>
    </motion.div>
  )
}
