'use client'

import React from 'react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Joseph A. Ayinde',
    role: 'Chief Executive Officer & Founder',
    linkedin: '#'
  },
  {
    name: 'Johnson E. Nifemi',
    role: 'Chief Technology Officer',
    linkedin: '#'
  },
  {
    name: 'Oluwadara Akinsoji',
    role: 'Chief Design Officer',
    linkedin: '#'
  },
  {
    name: 'Oluwapelumi Dunmoye',
    role: 'Chief Marketing Officer',
    linkedin: '#'
  },
  {
    name: 'Keshav Saxena',
    role: 'Head of Machine Learning & Deployment',
    linkedin: '#'
  },
  {
    name: 'Sarathy Selvam',
    role: 'Computer Vision/Deep Learning Engineer',
    linkedin: '#'
  },
  {
    name: 'Adolfo Alvarez',
    role: 'Chief Creative Officer',
    linkedin: '#'
  },
  {
    name: 'Catharine Yoder',
    role: 'Associate Creative',
    linkedin: '#'
  },
  {
    name: 'Jacqueline Nguyen',
    role: 'Product Designer',
    linkedin: '#'
  },
  {
    name: 'Timothy Takeuchi',
    role: 'Product Designer',
    linkedin: '#'
  },
  {
    name: 'Daniel',
    role: 'Product Designer',
    linkedin: '#'
  },
  {
    name: 'Shivam Patel',
    role: 'Content Associate',
    linkedin: '#'
  },
  {
    name: 'Sean Segre',
    role: 'Head of Short Form Content',
    linkedin: '#'
  },
  {
    name: 'Maxwell Simbuwa',
    role: 'Head of Long Form Content',
    linkedin: '#'
  }
]

export default function TeamGrid() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            The innovators shaping the future of personalized learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Headshot placeholder with HEALLY themed gradient */}
              <div className="aspect-w-1 aspect-h-1">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xl font-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-4">{member.role}</p>
                
                {/* LinkedIn link */}
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 