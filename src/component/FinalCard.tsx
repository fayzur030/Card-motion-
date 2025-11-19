import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from 'lucide-react'

const cards = [
  {
    id: 1,
    title: 'We don’t follow trends',
    description: 'We design what proper trading should feel like',
    icon: <TrendingUp size={36} color='#F5A623' />,
    rotate: 0,
  },
  {
    id: 2,
    title: 'Trade with clarity',
    description: 'Every rule exists to empower, not restrict',
    icon: <Antenna size={36} color='#F5A623' />,
    rotate: -2,
  },
  {
    id: 3,
    title: 'Every parameter matters',
    description: 'Transparent, balanced, and fair from day one',
    icon: <SlidersHorizontal size={36} color='#F5A623' />,
    rotate: 1,
  },
  {
    id: 4,
    title: 'Grow without limits',
    description: 'The better you perform, the more we scale with you',
    icon: <Sprout size={36} color='#F5A623' />,
    rotate: -1,
  },
  {
    id: 5,
    title: 'Your focus on the charts',
    description: 'We handle everything else from funding to payouts',
    icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
    rotate: 1,
  },
  {
    id: 6,
    title: 'No distractions, No noise',
    description: 'Just pure performance',
    icon: <VolumeOff size={36} color='#F5A623' />,
    rotate: -1,
  },
  {
    id: 7,
    title: 'Precision. Control. Freedom',
    description: 'Built for traders who demand more',
    icon: <Crosshair size={36} color='#F5A623' />,
    rotate: 0,
  },
]

export default function StackingStickyCards() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section className='h-[300vh] flex items-start justify-center bg-black pt-20'>
      <div className='w-full max-w-sm relative' ref={ref}>
        {cards.map((card, index) => {
          const scale = useTransform(
            scrollYProgress,
            [0, 1],
            [0.95 + index * 0.01, 1]
          )
          const y = useTransform(scrollYProgress, [0, 1], [50, 0])

          return (
            <motion.div
              key={card.id}
              style={{ scale, y, rotate: card.rotate }}
              className={`sticky top-20 mb-6 text-white bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 rounded-2xl shadow-lg p-6 border border-gray-500`}
            >
              <div className='mb-4'>{card.icon}</div>
              <h2 className='text-xl font-bold mb-2'>{card.title}</h2>
              <p className='text-gray-400'>{card.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
