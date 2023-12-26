import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy stops
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unlock exclusive benefits with our Card Deals feature. Enjoy special discounts, rewards, and personalized offers tailored to your spending habits—all designed to enhance your banking experience with HooBank.
        </p>
      <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>  
  )
}

export default CardDeal