import React from 'react'
import styles from './styles'

import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
  return (
    // Div will be wrapping our entire app
    <div className="bg-primary w-full overflow-hidden">
      {/* Will wrap the nav bar and give it padding*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         {/* Will style the width full*/}
        <div className={`${styles.boxWidth}`}>  
          <Navbar/>
        </div>
      </div>

      {/* Will make hero section now*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        {/* Styling the box */}
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/* Will make  section now*/}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        {/* Styling the box */}
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>


    </div>
  )
}

export default App
