'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    {
      name: 'Customers',
      dropdown: true,
      content: (
        <div className="absolute top-full right-0 w-96 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Path</h3>
          <div className="space-y-4">
            <Link href="/customers/b2b" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">🏢</div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Enterprise & Institutions</h4>
                  <p className="text-sm text-gray-600">For organizations looking to transform their learning ecosystem</p>
                </div>
              </div>
            </Link>
            <Link href="/customers/b2c" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">👤</div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Individual Learners</h4>
                  <p className="text-sm text-gray-600">For students and professionals seeking personalized learning</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )
    },
    { name: 'Investors', href: '/investors' },
    {
      name: 'Why Us',
      dropdown: true,
      content: (
        <div className="absolute top-full right-0 w-96 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Team & Partnerships</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🎓</div>
              <p className="text-sm text-gray-600">Leadership from Harvard, OpenAI, Apple, Oracle, and JP Morgan spanning 4 countries</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">👨‍💼</div>
              <p className="text-sm text-gray-600">CEO Jo (Ex-OpenAI), CMO Pelumi Dunmoye (Harvard), Head of ML Keshav (Ex-Apple & Oracle), Engineer Vihaan Nama (Ex-JP Morgan), and content creators from MrBeast</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🤝</div>
              <p className="text-sm text-gray-600">Extensive partnership network with leading educational institutions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🌍</div>
              <p className="text-sm text-gray-600">Global presence with teams in US, France, Nigeria, India, and Singapore</p>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Why Now',
      dropdown: true,
      content: (
        <div className="absolute top-full right-0 w-96 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">The Learning Inflection Point</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">📈</div>
              <p className="text-sm text-gray-600">Unprecedented convergence of human and machine learning capabilities</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🤖</div>
              <p className="text-sm text-gray-600">AI technology has reached the maturity to revolutionize personalized learning</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🎯</div>
              <p className="text-sm text-gray-600">$17T global learning loss creates urgent need for innovative solutions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">🚀</div>
              <p className="text-sm text-gray-600">Perfect timing to leverage AI for transformative educational impact</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                HEALLY
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                        activeDropdown === item.name
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        pathname === item.href
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full right-0 w-96 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4 z-50">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="bg-gray-50 px-4 py-2">
                        {item.content}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      pathname === item.href
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 