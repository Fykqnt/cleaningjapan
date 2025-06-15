import Header from "@/components/Header"
import JobsHeader from "@/components/JobsHeader"
import JobFilters from "@/components/JobFilters"
import JobsList from "@/components/JobsList"
import Footer from "@/components/Footer"

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <JobsHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <JobFilters />
          </div>
          <div className="lg:col-span-3">
            <JobsList />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
