import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const CarouselHome = ({ Slides :children, autoSlide = false ,autoSlideInterval= 3000}) => {
    const [curr , setCurr] = useState(0)
    
    const prev = () => setCurr((curr == 0 ? Slides.length -1 : curr - 1))
    const next = () => setCurr((curr == Slides.length -1 ? 0 : curr + 1))

    useEffect(() =>{
        if (!autoSlide) return
        const SlideIntervale = setInterval(next, autoSlideInterval)
        return ()=>clearInterval(SlideIntervale)
    },[])

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{transform:`translateX(-${curr * 100}%) `}}>{children}</div>
        <div className='absolute inset-0 flex justify-between items-center p-4'>
            <button onClick={prev} className='p-1 rounded-full bg-white'><ArrowLeft/></button>
            <button onClick={next} className='p-1 rounded-full bg-white'><ArrowRight/></button>
        </div>
        <div className=''>

        </div>
    </div>
  )
}

export default CarouselHome