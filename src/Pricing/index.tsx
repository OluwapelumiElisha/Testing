import React from 'react'
import PricingHero from '../Components/pricingHero'
import FaqSection from '../Components/faq'
const index = () => {
    return (
        <div>
            <div className="bg-[#ecfcff]">
                <PricingHero/>
                <div className='bg-[#F7FEFF] -mt-56 pb-0'>
                    <FaqSection/>
                </div>
                
            </div>
        </div>
    )
}

export default index
