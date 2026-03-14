"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src="/images/interior.jpg"
              alt="Interior do restaurante O Rodinhas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 rounded-lg bg-primary/90 px-5 py-3 backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-card">+30</p>
              <p className="text-xs text-card/70">Anos de tradição</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              A Nossa História
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
              Tradição e Paixão pela Gastronomia
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                O Rodinhas foi fundado em 1992 e é gerido pelo Sr. Alfredo assim
                como pelo seu filho João. O choco frito, os caracóis, as
                caracoletas fritas e as francesinhas são as grandes especialidades
                da casa.
              </p>
              <p>
                Para além destes pratos, o Rodinhas é muito procurado pela sua
                grande variedade de mariscos sempre frescos. A simpatia e boa
                disposição fazem parte de quem nesta casa trabalha.
              </p>
              <p>
                Como diz o João, a história do Rodinhas continua a ser feita
                diariamente pelos seus funcionários e pelos seus clientes, pois eles
                é que engradecem o nome da casa.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
            >
              Descubra o Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
