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
import { useRef } from 'react'
import type { CardProps } from '../types/CartProps'

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
    rotate: -1.8,
  },
  {
    id: 3,
    title: 'Every parameter matters',
    description: 'Transparent, balanced, and fair from day one',
    icon: <SlidersHorizontal size={36} color='#F5A623' />,
    rotate: 0,
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
    rotate: -1,
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
    rotate: -1,
  },
]

export default function FramerStackMotion() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  })

  return (
    <div ref={wrapperRef}>
      {cards.map((card, index) => {
        const start = index * 0.12
        const end = start + 0.4

        return (
          <StackCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            rotate={card.rotate}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </div>
  )
}

function StackCard({
  title,
  description,
  icon,
  rotate,
  color,
  progress,
  range,
}: CardProps) {
  const scale = useTransform(progress, range, [1, 0.85])
  const moveUp = useTransform(progress, range, [5, -180])

  return (
    <motion.div
      className='h-screen sticky top-0 flex justify-center items-center text-white'
      style={{ scale, y: moveUp, rotate }}
    >
      <div
        className='bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
        flex flex-col justify-center relative
        h-[330px] w-[50%] p-10 origin-top
        border border-white/30 rounded-3xl shadow-xl'
        style={{ backgroundColor: color }}
      >
        <div
          className='absolute top-10 p-3 w-fit rounded-2xl 
          bg-white/10 border border-white/20 shadow-md'
        >
          {icon}
        </div>

        <h1 className='text-4xl font-semibold mb-2 mt-10'>{title}</h1>

        <p className='text-gray-400 text-[22px] leading-relaxed'>
          {description}
        </p>
      </div>
    </motion.div>
  )
}
