import React from 'react'
import Marquee from 'react-fast-marquee'

const Tech = () => {
  return (
    <section className='mt-64'>
      <h1 className='text-white text-[96px] font-bold mb-24 ml-16' style={{ fontFamily: "Sora Variable" }}>
        Tech Stack
      </h1>
      <div className='flex gap-20 flex-col'>
        <Marquee className=''>
        <img className="mx-10" src="/img/tech/Frame-1.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-2.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-3.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-4.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-5.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-6.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-1.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-2.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-3.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-4.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-5.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-6.png" alt="MAW" />
      </Marquee>

      <Marquee direction="right">
        <img className="mx-10" src="/img/tech/Frame.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-7.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-8.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-9.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-10.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-11.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-7.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-8.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-9.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-10.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-11.png" alt="MAW" />
      </Marquee>

      <Marquee>
        <img className="mx-10" src="/img/tech/Frame-12.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-13.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-14.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-15.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-16.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Vector.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-12.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-13.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-14.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-15.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Frame-16.png" alt="MAW" />
        <img className="mx-10" src="/img/tech/Vector.png" alt="MAW" />
      </Marquee>
      </div>
    </section>
  )
}

export default Tech
