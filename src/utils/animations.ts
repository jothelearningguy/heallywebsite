'use client'

import { useState, useEffect } from 'react'

// Konami code sequence
const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

export const useEasterEggs = () => {
  const [sequence, setSequence] = useState<string[]>([])
  const [isRainbowMode, setIsRainbowMode] = useState(false)
  const [isConfettiMode, setIsConfettiMode] = useState(false)
  const [isMatrixMode, setIsMatrixMode] = useState(false)

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key]
      if (newSequence.length > konamiCode.length) {
        newSequence.shift()
      }
      setSequence(newSequence)

      // Check for Konami code
      if (newSequence.join(',') === konamiCode.join(',')) {
        setIsRainbowMode(prev => !prev)
        setSequence([])
      }

      // Matrix mode: Press 'm' three times
      if (e.key === 'm' && newSequence.filter(k => k === 'm').length === 3) {
        setIsMatrixMode(prev => !prev)
        setSequence([])
      }

      // Confetti mode: Press 'c' three times
      if (e.key === 'c' && newSequence.filter(k => k === 'c').length === 3) {
        setIsConfettiMode(true)
        setTimeout(() => setIsConfettiMode(false), 3000)
        setSequence([])
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [sequence])

  return {
    isRainbowMode,
    isConfettiMode,
    isMatrixMode
  }
}

export const rainbowAnimation = 'animate-[rainbow_5s_linear_infinite]'
export const floatAnimation = 'animate-[float_3s_ease-in-out_infinite]'
export const pulseGlowAnimation = 'animate-[pulseGlow_2s_ease-in-out_infinite]'
export const matrixAnimation = 'animate-[matrix_20s_linear_infinite]' 