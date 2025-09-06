import Footer from './Footer'
import Hero from './hero'
import Cards from './secondSection'
const LandingPage = () => {
  return (
     <div className="bg-[#ecfcff]">

      {/* <main className="max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-24"> */}
        <Hero />
        <Cards/>
        <Footer/>
        {/* <TrustIndicators /> */}
        {/* <ProductDemo /> */}
      {/* </main> */}
    </div>
  )
}

export default LandingPage
