import { CTASection } from "@/components/cta-section"
import { SolutionsSection } from "@/components/solutions-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ResourcesSection } from "@/components/resources-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
