import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { RestaurantJsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <AboutSection />
        <ReviewsSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
