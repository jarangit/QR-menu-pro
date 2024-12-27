import Image from 'next/image'
import React from 'react'


const CommunityPage = () => {
  const image = '/assets/images/food1.jpg'
  return (
    <div>
      <div className='py-4 w-full h-[100vh] relative'>
        <Image src={image}
          alt=''
          fill
          className='object-cover'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        <div className='absolute bottom-32 left-12  leading-[4] text-white'>
          <h1 className='text-4xl font-bold border-b uppercase'>roadted lamp</h1>
          <p className='font-thin'>Tag someone who would like this</p>

          {/* button */}
          <button className='bg-white/20  h-12 flex justify-center items-center px-6 rounded-full uppercase'>
            <div className=''>
              Read more</div></button>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage