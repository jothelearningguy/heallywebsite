'use client'

import React from 'react'
import { motion } from 'framer-motion'

const seaCreatures = [
  {
    id: 'fish1',
    emoji: '🐠',
    size: 'text-4xl',
    path: [
      { x: '0%', y: '20%' },
      { x: '100%', y: '40%' },
      { x: '0%', y: '60%' }
    ],
    duration: 15
  },
  {
    id: 'fish2',
    emoji: '🐟',
    size: 'text-3xl',
    path: [
      { x: '100%', y: '30%' },
      { x: '0%', y: '50%' },
      { x: '100%', y: '70%' }
    ],
    duration: 20
  },
  {
    id: 'turtle',
    emoji: '🐢',
    size: 'text-5xl',
    path: [
      { x: '0%', y: '80%' },
      { x: '100%', y: '85%' },
      { x: '0%', y: '90%' }
    ],
    duration: 30
  },
  {
    id: 'octopus',
    emoji: '🐙',
    size: 'text-4xl',
    path: [
      { x: '100%', y: '10%' },
      { x: '0%', y: '30%' },
      { x: '100%', y: '20%' }
    ],
    duration: 25
  },
  {
    id: 'dolphin',
    emoji: '🐬',
    size: 'text-5xl',
    path: [
      { x: '0%', y: '40%' },
      { x: '100%', y: '20%' },
      { x: '0%', y: '60%' }
    ],
    duration: 18
  }
]

const seaPlants = [
  {
    id: 'seaweed1',
    emoji: '🌿',
    size: 'text-4xl',
    position: { x: '10%', y: '90%' }
  },
  {
    id: 'seaweed2',
    emoji: '🌿',
    size: 'text-5xl',
    position: { x: '30%', y: '85%' }
  },
  {
    id: 'seaweed3',
    emoji: '🌿',
    size: 'text-3xl',
    position: { x: '50%', y: '88%' }
  },
  {
    id: 'seaweed4',
    emoji: '🌿',
    size: 'text-4xl',
    position: { x: '70%', y: '87%' }
  },
  {
    id: 'seaweed5',
    emoji: '🌿',
    size: 'text-5xl',
    position: { x: '90%', y: '89%' }
  }
]

export default function SeaCreatures() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated sea creatures */}
      {seaCreatures.map((creature) => (
        <motion.div
          key={creature.id}
          className={`absolute ${creature.size}`}
          animate={{
            x: creature.path.map(p => p.x),
            y: creature.path.map(p => p.y)
          }}
          transition={{
            duration: creature.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {creature.emoji}
        </motion.div>
      ))}

      {/* Sea plants with gentle swaying animation */}
      {seaPlants.map((plant) => (
        <motion.div
          key={plant.id}
          className={`absolute ${plant.size}`}
          style={{
            left: plant.position.x,
            bottom: plant.position.y
          }}
          animate={{
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
        >
          {plant.emoji}
        </motion.div>
      ))}
    </div>
  )
} 