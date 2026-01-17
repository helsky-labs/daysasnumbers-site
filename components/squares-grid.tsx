'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SquaresGridProps {
  totalSquares?: number
  filledSquares?: number
  animate?: boolean
  size?: 'sm' | 'md' | 'lg'
}

function getDayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export function SquaresGrid({
  totalSquares = 365,
  filledSquares,
  animate = true,
  size = 'md',
}: SquaresGridProps) {
  const [currentDay, setCurrentDay] = useState(0)
  const filled = filledSquares ?? currentDay

  useEffect(() => {
    setCurrentDay(getDayOfYear())
  }, [])

  const sizeClasses = {
    sm: 'w-2 h-2 gap-0.5',
    md: 'w-3 h-3 sm:w-4 sm:h-4 gap-1',
    lg: 'w-4 h-4 sm:w-5 sm:h-5 gap-1.5',
  }

  const gridCols = {
    sm: 'grid-cols-[repeat(19,minmax(0,1fr))]',
    md: 'grid-cols-[repeat(19,minmax(0,1fr))] sm:grid-cols-[repeat(25,minmax(0,1fr))]',
    lg: 'grid-cols-[repeat(15,minmax(0,1fr))] sm:grid-cols-[repeat(20,minmax(0,1fr))]',
  }

  return (
    <div className={`grid ${gridCols[size]} gap-1 sm:gap-1.5`}>
      {Array.from({ length: totalSquares }).map((_, index) => {
        const isFilled = index < filled
        const delay = animate ? index * 0.002 : 0

        return (
          <motion.div
            key={index}
            initial={animate ? { opacity: 0, scale: 0.5 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay,
              duration: 0.2,
              ease: 'easeOut',
            }}
            className={`
              ${sizeClasses[size].split(' ').slice(0, 2).join(' ')}
              rounded-[2px]
              transition-colors duration-300
              ${isFilled
                ? 'bg-foreground'
                : 'bg-transparent border border-border'
              }
            `}
          />
        )
      })}
    </div>
  )
}
