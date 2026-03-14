"use client"

import { motion } from "framer-motion"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategoryProps {
  title: string
  items: MenuItem[]
  index: number
}

export function MenuCategory({ title, items, index }: MenuCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-card p-8 shadow-sm"
    >
      <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h2>

      <div className="flex flex-col divide-y divide-border">
        {items.map((item) => (
          <div key={item.name} className="flex gap-4 py-5 first:pt-0 last:pb-0">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
            <span className="shrink-0 font-serif text-lg font-bold text-accent">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
