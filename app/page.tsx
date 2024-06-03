import React from 'react'
import Image from 'next/image'  
import Searchbar from '@/components/Searchbar'

const page = () => {
  return (
    <>
      <p>Return from 42:00</p>
      <section className='px-6 md:px-20 py-24 border-2 border-red-500'>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col justify-center'>

            <p className='flex gap-2 text-sm text-red-700 font-medium text-primary'>
              Smart Shopping Starts Here:
              <Image 
                src='/assets/icons/arrow-right.svg'
                alt='Arrow Right Icon'
                width={16}
                height={16}
              />
            </p>

            <h1 className='text-4xl mt-2 md:text-5xl font-bold text-primary'>
              Unleash the Power of 
              <span className='text-red-600'> PriceWise</span>
            </h1>

            <p className='text-lg mt-4 text-gray-600'>
              Track product prices effortlessly and save money on your online shopping.
              Powerful, self-serve product and growth analytics to help you convert, engage and retain more.
            </p>

            <Searchbar />

          </div>

          HeroCarousel


        </div>
      </section>

      <section className='trending-section'>
        <h2 className='text-[32px] font-semibold'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone 15', 'Book', 'Sneakers'].map 
          ((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default page
