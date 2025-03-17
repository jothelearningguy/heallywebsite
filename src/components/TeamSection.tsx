'use client'

import React from 'react'

const teamMembers = [
  {
    name: 'Joseph A. Ayinde',
    role: 'Chief Executive Officer & Founder',
    description: 'Visionary leader driving HEALLY\'s mission to revolutionize learning through AI. Exceptional at building partnerships and fostering innovation.',
    strengths: ['Strategic Vision', 'Leadership', 'Networking', 'Communication', 'Innovation'],
    image: '/team/joseph.jpg'
  },
  {
    name: 'Johnson E. Nifemi',
    role: 'Chief Technology Officer',
    description: 'Creative technologist with deep understanding of AI and learning systems. Strong technical foundation with innovative problem-solving approach.',
    strengths: ['Technical Leadership', 'Project Management', 'Innovation', 'Team Communication'],
    image: '/team/johnson.jpg'
  },
  {
    name: 'Oluwadara Akinsoji',
    role: 'Lead Product Designer',
    description: 'User-centric design expert crafting intuitive learning experiences. Brings a perfect blend of aesthetics and functionality.',
    strengths: ['UX/UI Design', 'User Research', 'Collaborative Design', 'Visual Communication'],
    image: '/team/oluwadara.jpg'
  },
  {
    name: 'Nilesh Kanti',
    role: 'Lead Machine Learning Engineer',
    description: 'Technical genius spearheading AI and machine learning development. Expert at breaking down complex problems and building innovative solutions.',
    strengths: ['AI Development', 'Machine Learning', 'Technical Architecture', 'Innovation'],
    image: '/team/nilesh.jpg'
  },
  {
    name: 'Sarathy Selvam',
    role: 'Technical Product Manager',
    description: 'Young intellectual with a natural startup mindset. Combines technical expertise with business acumen to drive product development.',
    strengths: ['Technical Strategy', 'Adaptability', 'Communication', 'Problem Solving'],
    image: '/team/sarathy.jpg'
  },
  {
    name: 'Abraham Osas',
    role: 'Frontend Developer',
    description: 'Committed developer with a long-term vision for HEALLY. Self-starter focused on creating engaging user interfaces.',
    strengths: ['Frontend Development', 'UI Implementation', 'Team Collaboration'],
    image: '/team/abraham.jpg'
  },
  {
    name: 'Jaegoo Ha',
    role: 'Product Designer',
    description: 'Detail-oriented designer bringing fresh perspectives to the product team. Strong collaborative mindset with excellent execution skills.',
    strengths: ['UI Design', 'Visual Design', 'Attention to Detail', 'Collaboration'],
    image: '/team/jaegoo.jpg'
  },
  {
    name: 'Shivam Patel',
    role: 'Business Development Lead',
    description: 'Charismatic leader connecting HEALLY\'s vision with market opportunities. Combines analytical thinking with strong relationship building.',
    strengths: ['Business Strategy', 'Sales Leadership', 'Relationship Building', 'Market Analysis'],
    image: '/team/shivam.jpg'
  }
]

export default function TeamSection() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the innovators shaping the future of personalized learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Join our growing team of innovators and help shape the future of education.
          </p>
          <a
            href="/careers"
            className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
} 