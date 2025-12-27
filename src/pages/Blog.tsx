import headerImg from '@/assets/image/hearderImg.png'
import PageTransition from '@/components/common/PagesTransition'
import { ParallaxScroll } from '@/components/ui/parallax-scroll-2'
import { img_scroll } from '@/constant/images'


const Blog = () => {

  return (
    <PageTransition>
      <div className='w-screen mt-20 flex flex-col items-center bg-white '>
        <p className='text-2xl font-bold'>Images of the enterprise</p>
        <div className='relative flex w-full h-100' >
          <img className='w-full h-full' src={headerImg} alt="" />
        </div >
        <div className='w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 px-10 lg:px-0 flex flex-col md:flex-row justify-between'>
          <ParallaxScroll images={img_scroll} />
        </div>
      </div>
    </PageTransition>

  )
}

export default Blog