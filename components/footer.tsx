import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold">O Rodinhas</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent">
                Marisqueira desde 1992
              </p>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Marisqueira tradicional em Sesimbra, servindo os melhores
              mariscos frescos, choco frito e petiscos desde 1992.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/#inicio", label: "Inicio" },
                { href: "/menu", label: "Menu" },
                { href: "/#sobre", label: "Sobre Nós" },
                { href: "/#galeria", label: "Galeria" },
                { href: "/#localizacao", label: "Localização" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contactos
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/70">
                  Sesimbra, Portugal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+351212233456"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  +351 212 233 456
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Ter - Dom: 12:00 - 22:00</p>
                  <p>Segunda: Encerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tripadvisor.pt/Restaurant_Review-g189163-d3178498-Reviews-O_Rodinhas-Sesimbra_Setubal_District_Alentejo.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="TripAdvisor"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Siga-nos para novidades e ofertas especiais.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            Marisqueira O Rodinhas &copy; {new Date().getFullYear()}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
