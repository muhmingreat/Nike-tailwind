import ReviewCard from '../components/ReviewCard'
import React from 'react'
import {reviews} from '../constants'
const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palaquin text-center 
      text-4xl font-bold'> What Our <span className='text-[#00fd9a]'>
      Customers
      </span> Say?
      </h3>
      <p className='info-text m-a-auto mt-4 max-w-lg text-center'>
        Hear geniune stories from our satisfied 
        customers about their exceptional experences with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly 
      items-center max-lg:flex-col gap-14 '>
        {reviews.map((review) => (
          <ReviewCard key={review.costomerName}
            imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews