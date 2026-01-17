'use client'

import { motion } from 'framer-motion'

interface LifeViewProps {
  totalYears?: number
  currentAge?: number
  animate?: boolean
}

export function LifeView({
  totalYears = 80,
  currentAge = 30,
  animate = true,
}: LifeViewProps) {
  return (
    <div className="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-2">
      {Array.from({ length: totalYears }).map((_, index) => {
        const isFilled = index < currentAge
        const delay = animate ? index * 0.02 : 0

        return (
          <motion.div
            key={index}
            initial={animate ? { opacity: 0, scale: 0.5 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay,
              duration: 0.3,
              ease: 'easeOut',
            }}
            className={`
              w-5 h-5 sm:w-6 sm:h-6
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
