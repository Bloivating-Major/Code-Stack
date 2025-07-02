import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ResourcesSection } from "@/components/resources-section"
import { AboutUsSection } from "@/components/aboutUs-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ResourcesSection />
      <AboutUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
