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

export default function Cards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })

  return (
    <ReactLenis root>
      <main ref={container} className='bg-black'>
        <section className='text-white'>
          {CartItems.map((item, i) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              progress={scrollYProgress}
              rotate={item.rotate}
              range={[i * 0.12, i * 0.12 + 0.4]}
            />
          ))}
        </section>
      </main>
    </ReactLenis>
  )
}

function Card({
  title,
  description,
  icon,
  color,
  progress,
  range,
  rotate,
}: CardProps) {
  const ref = useRef(null)

  // Scale effect like framer
  const scale = useTransform(progress, range, [1, 0.85])

  // Y movement — Framer-style stacking effect
  const translateY = useTransform(progress, range, [0, -150])

  return (
    <div
      ref={ref}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          y: translateY,
          rotate,
          backgroundColor: color,
        }}
        className='bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
          flex flex-col justify-center relative
          h-[330px] w-[70%] p-10 origin-top
          border border-white/30 rounded-3xl shadow-xl'
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
      </motion.div>
    </div>
  )
}

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'
// import { ReactLenis } from 'lenis/react'
// import {
//   Antenna,
//   ChartNoAxesCombined,
//   Crosshair,
//   SlidersHorizontal,
//   Sprout,
//   TrendingUp,
//   VolumeOff,
// } from 'lucide-react'
// import type { CardProps } from '../types/CartProps'

// const CartItems = [
//   {
//     id: 1,
//     title: 'We don’t follow trends',
//     description: 'We design what proper trading should feel like',
//     icon: <TrendingUp size={36} color='#F5A623' />,
//     color: '#1f2937',
//     rotate: '0 deg',
//   },

//   {
//     id: 2,
//     title: 'Trade with clarity',
//     description: 'Every rule exists to empower, not restrict',
//     icon: <Antenna size={36} color='#F5A623' />,
//     color: '#334155',
//     rotate: '-2deg',
//   },

//   {
//     id: 3,
//     title: 'Every parameter matters',
//     description: 'Transparent, balanced, and fair from day one',
//     icon: <SlidersHorizontal size={36} color='#F5A623' />,
//     color: '#0f172a',
//     rotate: '0deg',
//   },

//   {
//     id: 4,
//     title: 'Grow without limits',
//     description: 'The better you perform, the more we scale with you',
//     icon: <Sprout size={36} color='#F5A623' />,
//     color: '#1e293b',
//     rotate: '-2deg',
//   },

//   {
//     id: 5,
//     title: 'Your focus on the charts',
//     description: 'We handle everything else from funding to payouts',
//     icon: <ChartNoAxesCombined size={36} color='#F5A623' />,
//     color: '#172554',
//     rotate: '-2deg',
//   },

//   {
//     id: 6,
//     title: 'No distractions, No noise',
//     description: 'Just pure performance',
//     icon: <VolumeOff size={36} color='#F5A623' />,
//     color: '#1f2937',
//     rotate: '-2deg',
//   },

//   {
//     id: 7,
//     title: 'Precision. Control. Freedom',
//     description: 'Built for traders who demand more',
//     icon: <Crosshair size={36} color='#F5A623' />,
//     color: '#0f172a',
//     rotate: '-2deg',
//   },
// ]

// export default function Cards() {
//   const container = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'start start'],
//   })

//   return (
//     <ReactLenis root>
//       <main ref={container} className=' bg-black'>
//         <section className='text-white '>
//           {CartItems.map((item, i) => {
//             const targetScale = Math.max(1, 1 - (CartItems.length - i) * 1)
//             return (
//               <Card
//                 key={item.id}
//                 i={i}
//                 title={item.title}
//                 description={item.description}
//                 icon={item.icon}
//                 color={item.color}
//                 progress={scrollYProgress}
//                 range={[i * 0.2, 1]}
//                 targetScale={targetScale}
//                 rotate={item.rotate}
//               />
//             )
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   )
// }

// function Card({
//   i,
//   title,
//   description,
//   icon,
//   color,
//   progress,
//   range,
//   rotate,
//   targetScale,
// }: CardProps) {
//   const ref = useRef(null)

//   const scale = useTransform(progress, range, [1, targetScale])

//   return (
//     <div
//       ref={ref}
//       className='h-screen flex items-center justify-center sticky top-0 pb-36 '
//     >
//       <motion.div
//         style={{
//           scale,
//           rotate,
//           backgroundColor: color,
//           top: `calc(-5vh + ${i * 20}px)`,
//         }}
//         className=' bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 r
//              flex flex-col justify-center relative -top-[25%]
//              h-[330px] w-[70%]  p-10 origin-top
//              border border-white/30 rounded-3xl shadow-xl'
//       >
//         <div
//           className='absolute top-10
//                 p-3 w-fit rounded-2xl bg-white/10
//                 border border-white/20 shadow-md'
//         >
//           {icon}
//         </div>

//         <h1 className='text-4xl font-semibold mb-2 mt-10 '>{title}</h1>

//         <p className='text-gray-400 text-[22px] leading-relaxed '>
//           {description}
//         </p>
//       </motion.div>
//     </div>
//   )
// }
