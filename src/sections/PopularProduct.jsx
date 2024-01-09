import PopularProductCard from '../components/PopularProductCard'
import {products} from '../constants'


const PopularProduct = () => {
  return (
    <section id='products' 
    className='max-container
    max-sx:mt-12 
    '>
    
    <div className='flex flex-col
    justify-start gap-5 '>
    <h2 className='text-4xl
    font-palaguin font-bold
    '>Our <span className='text-[#00df9a]'> 
    Popular</span> Products</h2>
    <p className='lg:max-w-lg mt-2
    text-slate-gray'>Exprience top-notch qualityand Style
     with our sought-after selections
      Discover a world of confort, design, and value</p> 
    </div>
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3
    sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product)=> (
          <PopularProductCard key=
          {product.name} {...product} />
        ))}
    </div>
     </section>
  )
}

export default PopularProduct