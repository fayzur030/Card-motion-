import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useState } from 'react'
import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from 'lucide-react'

const Cart = () => {
  const CartItems = [
    {
      id: 1,
      title: 'We dont follow trends',
      description: 'We design what prop tranding should feel like',
      icon: <TrendingUp size={36} color='#F5A623' />,
    },
    {
      id: 2,
      title: 'Trade with clarity',
      description: 'Every rule exists to empower, not restrict',
      icon: <Antenna size={36} color='#F5A623' />,
    },
    {
      id: 3,
      title: 'Every parameter makes',
      description: 'Transparent, balanced, and fair from day one',
      icon: <SlidersHorizontal size={36} color='#F5A623' />,
    },
    {
      id: 4,
      title: 'Grow without limits.',
      description: 'The better you perform, the more we scale with you',
      icon: <Sprout size={36} color='#F5A623' />,
    },
    {
      id: 5,
      title: 'Your focus on the charts',
      description: 'We handle everything else from funding to payouts',
      icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
    },
    {
      id: 6,
      title: 'No distractions, No noise',
      description: 'Just pure performance',
      icon: <VolumeOff size={36} color='#F5A623' />,
    },
    {
      id: 7,
      title: 'Precision. Control. Freedom',
      description: 'Built for traders who demand more',
      icon: <Crosshair size={36} color='#F5A623' />,
    },
  ]

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 90, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: -i * 50,
      // rotate: -2 + i * 2,

      scale: 1,
      transition: {
        duration: 0.8, //1.2,
        ease: 'easeOut',
        delay: i * 1.1,
        staggerChildren: 0.15,
      },
    }),
  }

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className='text-white bg-black px-4 sm:px-6 md:px-8 relative'>
      <section
        className='flex flex-col items-center relative py-10 '
        style={{ perspective: '1200px' }}
      >
        {CartItems.map((item, index) => (
          <motion.div
            key={item.id}
            // animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 0.5,
              //  repeat: Infinity,
              ease: 'easeInOut',
            }}
            custom={index}
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              zIndex: hoveredIndex === index ? 999 : index,
              rotateX: hoveredIndex === index ? '6deg' : '0deg',
              rotateY: hoveredIndex === index ? '-4deg' : '0deg',
            }}
            className={`
              w-full
              max-w-md 
              sm:max-w-lg 
              md:max-w-2xl 
              lg:max-w-3xl 
              xl:max-w-4xl

              mt-[-50px]
              p-7

            bg-gradient-to-tr from-black via-gray-900 to-amber-900/40

              shadow-[0px_10px_35px_rgba(0,0,0,0.55)]
              border border-gray-700/60 
              rounded-3xl 

              transition-all duration-500
              backdrop-blur-xl
              relative
            `}
          >
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-2xl bg-white/5 border border-gray-700 shadow-md'>
                {item.icon}
              </div>
            </div>

            <div className='mt-5'>
              <h1 className='text-3xl sm:text-3xl font-semibold mb-3 tracking-wide'>
                {item.title}
              </h1>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Cart
