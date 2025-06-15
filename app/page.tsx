import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeaturedJobs from "@/components/FeaturedJobs"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <Footer />
    </main>
  )
}
