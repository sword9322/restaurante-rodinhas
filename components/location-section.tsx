"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { SectionTitle } from "./section-title"

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          label="Localização"
          title="Visite-nos em Sesimbra"
          description="Estamos à sua espera para uma experiência gastronómica inesquecível."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl lg:col-span-3"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.5!2d-9.1!3d38.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI2JzI0LjAiTiA5wrAwNicwMC4wIlc!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do restaurante O Rodinhas em Sesimbra"
              className="h-[300px] w-full lg:h-[400px]"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* Address */}
            <div className="flex flex-col gap-6 rounded-xl bg-background p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Morada
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Sesimbra, Setúbal, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Telefone
                  </h3>
                  <a
                    href="tel:+351212233456"
                    className="mt-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    +351 212 233 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Horário
                  </h3>
                  <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                    <p>Terça a Domingo: 12:00 - 22:00</p>
                    <p>Segunda-feira: Encerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Sesimbra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
            >
              <Navigation className="h-4 w-4" />
              Obter Direções
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
