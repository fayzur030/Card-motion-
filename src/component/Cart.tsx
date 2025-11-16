'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const CartItems = [
    {
      id: 1,
      title: 'We don’t follow trends',
      description: 'We design what prop trading should feel like',
      icon: <TrendingUp size={36} />,
    },
    {
      id: 2,
      title: 'Trade with clarity',
      description: 'Every rule exists to empower, not restrict',
      icon: <Antenna size={36} />,
    },
    {
      id: 3,
      title: 'Every parameter matters',
      description: 'Transparent, balanced, and fair, from day one',
      icon: <SlidersHorizontal size={36} />,
    },
    {
      id: 4,
      title: 'Grow without limits',
      description: 'The better you perform, the more we scale with you',
      icon: <Sprout size={36} />,
    },
    {
      id: 5,
      title: 'Your focus on the charts',
      description: 'We handle everything else from funding to payouts',
      icon: <ChartNoAxesCombined size={36} />,
    },
    {
      id: 6,
      title: 'No distractions, no noise',
      description: 'Just pure performance',
      icon: <VolumeOff size={36} />,
    },
    {
      id: 7,
      title: 'Precision. Control. Freedom',
      description: 'Built for traders who demand more',
      icon: <Crosshair size={36} />,
    },
  ]

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: -custom * 60,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: custom * 0.2 },
    }),
  }

  return (
    <div className='text-white p-4 sm:p-6 md:p-8 relative'>
      <section className='flex flex-col items-center relative h-[1000px]'>
        {CartItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{ zIndex: hoveredIndex === index ? 50 : index }}
            className={`
              w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
              mt-[-40px]
              p-6
              bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
              shadow-2xl shadow-black/50
              border border-gray-700
              rounded-3xl
              relative
              transform-gpu
              transition-all duration-500
            `}
          >
            {item.icon}
            <div className='mt-4'>
              <h1 className='text-3xl sm:text-3xl font-semibold mb-3'>
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
