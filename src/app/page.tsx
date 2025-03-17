'use client'

import React, { useState, useEffect } from 'react'
import { ChartBarIcon, UserGroupIcon, SparklesIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEasterEggs } from '@/utils/animations'
import confetti from 'canvas-confetti'
import ChatInterface from '@/components/ChatInterface'
import FloatingChatWidget from '@/components/FloatingChatWidget'

const basePhrase = "The Future of Learning Starts"
const changingWords = ["NOW", "with YOU", "with HEALLY"]

export default function Home() {
  const { isRainbowMode, isConfettiMode, isMatrixMode } = useEasterEggs()
  const [currentWord, setCurrentWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Handle confetti effect
  React.useEffect(() => {
    if (isConfettiMode) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }, [isConfettiMode])

  // Typing animation effect
  useEffect(() => {
    const word = changingWords[wordIndex]
    let timeout: NodeJS.Timeout

    const type = () => {
      if (isDeleting) {
        setCurrentWord(prev => prev.slice(0, -1))
      } else {
        setCurrentWord(prev => word.slice(0, prev.length + 1))
      }
    }

    if (isDeleting && currentWord === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % changingWords.length)
      return
    }

    if (!isDeleting && currentWord === word) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return
    }

    timeout = setTimeout(type, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [wordIndex, isDeleting, currentWord])

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white to-blue-50 transition-all duration-500 ${
      isMatrixMode ? 'bg-black text-green-400' : ''
    }`}>
      <Navigation />
      
      {/* Hero Section with Chat */}
      <section className="relative min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 min-h-[1.2em] ${
              isMatrixMode ? 'text-green-400' : 'text-gray-900'
            }`}>
              {basePhrase}{' '}
              <span className="text-blue-600">
                {currentWord}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            <p className={`text-xl ${
              isMatrixMode ? 'text-green-400' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Experience the future of personalized learning with HEALLY AI.
            </p>
          </div>

          {/* Main Chat Interface */}
          <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${
            isMatrixMode ? 'border-2 border-green-400' : 'bg-white'
          }`}>
            {/* Chat Header */}
            <div className={`p-6 ${
              isMatrixMode ? 'bg-black border-b border-green-400' : 'bg-blue-600'
            } text-white`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                <div>
                  <h2 className="text-xl font-bold">Chat with HEALLY AI</h2>
                  <p className={`text-sm ${
                    isMatrixMode ? 'text-green-400' : 'text-blue-100'
                  }`}>
                    Your personal learning companion
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Component */}
            <div className="h-[600px]">
              <ChatInterface />
            </div>
          </div>
        </div>

        {/* Floating Chat Widget */}
        <FloatingChatWidget />
      </section>

      {/* Stats Section */}
      <div className={`mt-20 ${isMatrixMode ? 'bg-black border border-green-400' : 'bg-white'} rounded-xl shadow-lg p-8 transition-all duration-300 hover:transform hover:scale-105`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className={`text-4xl font-bold ${isMatrixMode ? 'text-green-400' : 'text-blue-600'} animate-[float_4s_ease-in-out_infinite]`}>$17T</div>
            <p className={`mt-2 ${isMatrixMode ? 'text-green-400' : 'text-gray-600'}`}>Global Learning Loss</p>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${isMatrixMode ? 'text-green-400' : 'text-blue-600'} animate-[float_4s_ease-in-out_infinite]`}>$605B</div>
            <p className={`mt-2 ${isMatrixMode ? 'text-green-400' : 'text-gray-600'}`}>EdTech Market by 2027</p>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${isMatrixMode ? 'text-green-400' : 'text-blue-600'} animate-[float_4s_ease-in-out_infinite]`}>30%</div>
            <p className={`mt-2 ${isMatrixMode ? 'text-green-400' : 'text-gray-600'}`}>Time Saved with AI Learning</p>
          </div>
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className={`mt-24 ${isMatrixMode ? 'bg-black border border-green-400' : 'bg-white'} rounded-xl shadow-lg p-8 transition-all duration-300 hover:transform hover:scale-105`}>
        <h2 className={`text-3xl font-bold text-center mb-8 ${isMatrixMode ? 'text-green-400' : ''}`}>Market Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-[float_4s_ease-in-out_infinite]">
            <h3 className={`text-xl font-semibold ${isMatrixMode ? 'text-green-400' : 'text-red-600'} mb-4`}>🚨 The Problem</h3>
            <ul className={`space-y-3 ${isMatrixMode ? 'text-green-400' : 'text-gray-600'}`}>
              <li>• Global learning crisis resulting in $17T learning loss</li>
              <li>• One-size-fits-all models failing diverse learning styles</li>
              <li>• 30% time wastage due to inefficient study methods</li>
              <li>• Lack of AI-driven insights in educational institutions</li>
            </ul>
          </div>
          <div className="animate-[float_5s_ease-in-out_infinite]">
            <h3 className={`text-xl font-semibold ${isMatrixMode ? 'text-green-400' : 'text-green-600'} mb-4`}>🌍 The Opportunity</h3>
            <ul className={`space-y-3 ${isMatrixMode ? 'text-green-400' : 'text-gray-600'}`}>
              <li>• AI-powered adaptive learning revolution</li>
              <li>• $605B EdTech market by 2027</li>
              <li>• Leveraging RAG for dynamic learning</li>
              <li>• Addressing both B2C and B2B markets</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 