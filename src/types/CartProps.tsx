import { MotionValue } from "framer-motion"
import type { ReactNode } from "react"


export interface CardProps {
  title: string
  description: string
  icon: ReactNode
  rotate: number
  color?: string
  progress: MotionValue<number>
  range: number[]
}
