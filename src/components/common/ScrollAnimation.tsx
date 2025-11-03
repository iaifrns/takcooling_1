import { delay, motion, type Variant, type Variants } from 'framer-motion'

type ScrollAnimationProps = { 
    children: React.ReactNode ;
    delay:number;
    duration: number;
    direction: string;
    className: string

} 

const ScrollAnimation = ({ children  }:{children: React.ReactNode}) => {
  const delay = 0
  const duration = 0.6
  const direction = 'up'


  const variants :Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      className='flex w-full justify-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation

