import { ReactLenis } from 'lenis/react'
import { useTransform, motion, useScroll, MotionValue } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from 'lucide-react'

const CartItems = [
  {
    id: 1,
    title: 'We don’t follow trends',
    description: 'We design what proper trading should feel like',
    icon: <TrendingUp size={36} color='#F5A623' />,
    color: '#1f2937',
    rotate: 0,
  },
  {
    id: 2,
    title: 'Trade with clarity',
    description: 'Every rule exists to empower, not restrict',
    icon: <Antenna size={36} color='#F5A623' />,
    color: '#334155',
    rotate: -1,
  },
  {
    id: 3,
    title: 'Every parameter matters',
    description: 'Transparent, balanced, and fair from day one',
    icon: <SlidersHorizontal size={36} color='#F5A623' />,
    color: '#0f172a',
    rotate: 0,
  },
  {
    id: 4,
    title: 'Grow without limits',
    description: 'The better you perform, the more we scale with you',
    icon: <Sprout size={36} color='#F5A623' />,
    color: '#1e293b',
    rotate: -1,
  },
  {
    id: 5,
    title: 'Your focus on the charts',
    description: 'We handle everything else from funding to payouts',
    icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
    color: '#172554',
    rotate: -1,
  },
  {
    id: 6,
    title: 'No distractions, No noise',
    description: 'Just pure performance',
    icon: <VolumeOff size={36} color='#F5A623' />,
    color: '#1f2937',
    rotate: -1,
  },
  {
    id: 7,
    title: 'Precision. Control. Freedom',
    description: 'Built for traders who demand more',
    icon: <Crosshair size={36} color='#F5A623' />,
    color: '#0f172a',
    rotate: -1,
  },
]

export default function CardStack() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <section className='text-white'>
          {CartItems.map((card, i) => {
            // const targetScale = 1 - (CartItems.length - i) * 0.05
            const targetScale = 1
            return (
              <Card
                key={`card_${i}`}
                i={i}
                title={card.title}
                description={card.description}
                color={card.color}
                icon={card.icon}
                rotate={card.rotate}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

interface CardProps {
  i: number
  title: string
  description: string
  icon: ReactNode
  rotate: number
  color?: string
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  icon,
  color,
  rotate,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start end', 'start start'],
  // })

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className=' h-[100vh] flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          rotate: `${rotate}deg`,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: color,
        }}
        className='bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
          flex flex-col justify-center relative
          h-[300px] w-[50%] p-10 origin-top
          border border-white/30 rounded-3xl shadow-xl'
      >
        <div>
          <div
            className='absolute top-10 mb-4 p-3 w-fit rounded-2xl 
          bg-white/10 border border-white/20 shadow-md'
          >
            {icon}
          </div>

          <h1 className='text-4xl font-semibold mt-9 mb-4'>{title}</h1>
          <p className='text-gray-300 text-[22px] leading-relaxed'>
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
