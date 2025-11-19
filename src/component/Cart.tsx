import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from 'lucide-react'
import type { CardProps } from '../types/CartProps'

const CartItems = [
  {
    id: 1,
    title: 'We don’t follow trends',
    description: 'We design what proper trading should feel like',
    icon: <TrendingUp size={36} color='#F5A623' />,
    color: '#1f2937',
  },

  {
    id: 2,
    title: 'Trade with clarity',
    description: 'Every rule exists to empower, not restrict',
    icon: <Antenna size={36} color='#F5A623' />,
    color: '#334155',
  },

  {
    id: 3,
    title: 'Every parameter matters',
    description: 'Transparent, balanced, and fair from day one',
    icon: <SlidersHorizontal size={36} color='#F5A623' />,
    color: '#0f172a',
  },

  {
    id: 4,
    title: 'Grow without limits',
    description: 'The better you perform, the more we scale with you',
    icon: <Sprout size={36} color='#F5A623' />,
    color: '#1e293b',
  },

  {
    id: 5,
    title: 'Your focus on the charts',
    description: 'We handle everything else from funding to payouts',
    icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
    color: '#172554',
  },

  {
    id: 6,
    title: 'No distractions, No noise',
    description: 'Just pure performance',
    icon: <VolumeOff size={36} color='#F5A623' />,
    color: '#1f2937',
  },

  {
    id: 7,
    title: 'Precision. Control. Freedom',
    description: 'Built for traders who demand more',
    icon: <Crosshair size={36} color='#F5A623' />,
    color: '#0f172a',
  },
]

export default function Cards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <ReactLenis root>
      <main ref={container} className=' bg-black'>
        <section className='text-white '>
          {CartItems.map((item, i) => {
            const targetScale = Math.max(0.6, 1 - (CartItems.length - i) * 0.05)
            return (
              <Card
                key={item.id}
                i={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

function Card({
  i,
  title,
  description,
  icon,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const ref = useRef(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={ref}
      className='h-screen flex items-center justify-center sticky top-0 pb-36'
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className=' bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 r
             flex flex-col justify-center relative -top-[25%]
             h-[330px] w-[70%] rounded-2xl p-10 origin-top
             border border-white/10 shadow-xl'
      >
        <div
          className='absolute top-10
                p-3 w-fit rounded-2xl bg-white/10 
                border border-white/20 shadow-md'
        >
          {icon}
        </div>

        <h1 className='text-4xl font-bold mb-2 mt-10 '>{title}</h1>

        <p className='text-gray-400 text-[28px] leading-relaxed '>
          {description}
        </p>
      </motion.div>
    </div>
  )
}

// import { ReactLenis } from 'lenis/react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// import {
//   Antenna,
//   ChartNoAxesCombined,
//   Crosshair,
//   SlidersHorizontal,
//   Sprout,
//   TrendingUp,
//   VolumeOff,
// } from 'lucide-react'

// const CartItems = [
//   {
//     id: 1,
//     title: 'We dont follow trends',
//     description: 'We design what prop tranding should feel like',
//     icon: <TrendingUp size={36} color='#F5A623' />,
//   },
//   {
//     id: 2,
//     title: 'Trade with clarity',
//     description: 'Every rule exists to empower, not restrict',
//     icon: <Antenna size={36} color='#F5A623' />,
//   },
//   {
//     id: 3,
//     title: 'Every parameter makes',
//     description: 'Transparent, balanced, and fair from day one',
//     icon: <SlidersHorizontal size={36} color='#F5A623' />,
//   },
//   {
//     id: 4,
//     title: 'Grow without limits.',
//     description: 'The better you perform, the more we scale with you',
//     icon: <Sprout size={36} color='#F5A623' />,
//   },
//   {
//     id: 5,
//     title: 'Your focus on the charts',
//     description: 'We handle everything else from funding to payouts',
//     icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
//   },
//   {
//     id: 6,
//     title: 'No distractions, No noise',
//     description: 'Just pure performance',
//     icon: <VolumeOff size={36} color='#F5A623' />,
//   },
//   {
//     id: 7,
//     title: 'Precision. Control. Freedom',
//     description: 'Built for traders who demand more',
//     icon: <Crosshair size={36} color='#F5A623' />,
//   },
// ]

// export default function App() {
//   const container = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   })

//   return (
//     <ReactLenis root>
//       <main ref={container} className='bg-black'>
//         <section className='text-white '>
//           {CartItems.map((item, i) => {
//             const targetScale = 1 - (CartItems.length - i) * 0.05

//             return (
//               <Card
//                 key={item.id}
//                 i={i}
//                 title={item.title}
//                 description={item.description}
//                 icon={item.icon}
//                 progress={scrollYProgress}
//                 range={[i * 0.2, 1]}
//                 targetScale={targetScale}
//               />
//             )
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   )
// }

// function Card({ i, title, description, icon, progress, range, targetScale }) {
//   const ref = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'start start'],
//   })

//   const scale = useTransform(progress, range, [1, targetScale])

//   return (
//     <div
//       ref={ref}
//       className='h-screen flex items-center justify-center sticky top-0'
//     >
//       <motion.div
//         style={{
//           scale,

//           top: `calc(-5vh + ${i * 25}px)`,
//         }}
//         className='flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-2xl p-10 origin-top border border-white/10 shadow-xl   bg-gradient-to-tr from-black via-gray-900 to-amber-900/40'
//       >
//         <motion.div className='p-4 w-fit rounded-2xl bg-white/10 border border-white/20 shadow-md mb-4'>
//           {icon}
//         </motion.div>

//         <h1 className='text-3xl font-bold mb-3'>{title}</h1>
//         <p className='text-gray-200  leading-relaxed'>{description}</p>
//       </motion.div>
//     </div>
//   )
// }
