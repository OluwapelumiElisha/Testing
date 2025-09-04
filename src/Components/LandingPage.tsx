import Hero from './hero'
import Navbar from './navBar'
const LandingPage = () => {
  return (
     <div className="bg-[#ecfcff]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-24">
        <Hero />
        {/* <TrustIndicators /> */}
        {/* <ProductDemo /> */}
      </main>
    </div>
  )
}

export default LandingPage
