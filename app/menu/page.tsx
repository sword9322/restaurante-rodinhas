import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuPageContent } from "@/components/menu-page-content"

export const metadata: Metadata = {
  title: "Menu | O Rodinhas - Marisqueira Tradicional em Sesimbra",
  description:
    "Descubra o menu do restaurante O Rodinhas: mariscos frescos, choco frito, petiscos, carnes grelhadas, saladas e sobremesas tradicionais.",
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        <MenuPageContent />
      </main>
      <Footer />
    </>
  )
}
