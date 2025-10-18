import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='items-center justify-center flex flex-col my-20 py-12 md:px-28'>

<h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Customer Testimonials</h1>
    <p className='text-gray-500 mb-12'>What Our Users Are Saying </p>

    <div className='flex flex-wrap gap-6 '>
{testimonialsData.map((testimonial, index)=>(
    <div key={index }></div>
))}
    </div>

    </div>
  )
}

export default Testimonials