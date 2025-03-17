'use client'

import React, { useState } from 'react'

const teamStories = [
  {
    name: 'Joseph A. Ayinde',
    role: 'Chief Executive Officer & Founder',
    story: 'A visionary leader whose journey began with a profound belief in the transformative power of personalized learning. Joseph combines exceptional networking abilities with unwavering determination, driving HEALLY forward through challenges and opportunities.',
    skills: 'Visionary Leadership and Strategic thinking as the founder of HEALLY. Exceptional networking and communication skills, fostering key partnerships. Grit and perseverance, driving HEALLY\'s mission forward.',
    strengths: ['Resilience', 'Adaptability', 'Innovation', 'Determination', 'Focus', 'Charisma'],
    growth: 'Actively working on delegation and team empowerment while maintaining strategic vision.'
  },
  {
    name: 'Johnson E. Nifemi',
    role: 'Chief Technology Officer',
    story: 'Johnson shares a unique synergy with Joseph, acting as the technical cornerstone of HEALLY. His creative thinking and strong technical foundation have been crucial in translating the company\'s vision into technological reality.',
    skills: 'Creative thinker with a twin-like bond with Joseph, ensuring aligned vision. Strong technical foundation and adaptability in addressing challenges.',
    strengths: ['Project Management', 'Team Communication', 'Technical Innovation', 'Vision Alignment'],
    growth: 'Focusing on developing leadership confidence and strengthening cross-team collaboration strategies.'
  },
  {
    name: 'Oluwadara Akinsoji',
    role: 'Chief Design Officer',
    story: 'A talented design leader whose user-centric approach has shaped HEALLY\'s visual identity and user experience. Oluwadara brings both creativity and practicality to the team, ensuring that design decisions serve both aesthetic and functional purposes.',
    skills: 'Talented Lead Designer with a keen eye for user-centric design and strategic design thinking.',
    strengths: ['Design Leadership', 'User-Centric Design', 'Visual Innovation', 'Strategic Thinking'],
    growth: 'Expanding design system implementation while maintaining creative excellence.'
  },
  {
    name: 'Oluwapelumi Dunmoye',
    role: 'Chief Marketing Officer',
    story: 'A strategic marketing leader who brings innovative approaches to HEALLY\'s market presence and growth. Pelumi combines deep market understanding with creative execution.',
    skills: 'Strategic marketing leadership, brand development, and market expansion expertise.',
    strengths: ['Strategic Marketing', 'Brand Development', 'Market Analysis', 'Leadership'],
    growth: 'Developing integrated marketing strategies while scaling team capabilities.'
  },
  {
    name: 'Keshav Saxena',
    role: 'Head of Machine Learning & Deployment',
    story: 'Leading HEALLY\'s machine learning initiatives and deployment strategies, Keshav brings technical excellence and practical implementation expertise to our AI solutions.',
    skills: 'Machine learning expertise, deployment strategies, and technical leadership.',
    strengths: ['ML Leadership', 'Technical Strategy', 'Deployment Excellence', 'Innovation'],
    growth: 'Scaling ML operations while maintaining deployment efficiency.'
  },
  {
    name: 'Sarathy Selvam',
    role: 'Computer Vision/Deep Learning Engineer',
    story: 'A technical innovator focusing on advancing HEALLY\'s computer vision and deep learning capabilities. Sarathy brings both theoretical knowledge and practical implementation skills.',
    skills: 'Deep learning expertise, computer vision implementation, and technical innovation.',
    strengths: ['Computer Vision', 'Deep Learning', 'Technical Innovation', 'Problem Solving'],
    growth: 'Expanding expertise in advanced AI applications while maintaining technical excellence.'
  },
  {
    name: 'Adolfo Alvarez',
    role: 'Chief Creative Officer',
    story: 'Leading HEALLY\'s creative direction with innovative vision and strategic thinking. Adolfo ensures our brand message resonates across all platforms.',
    skills: 'Creative direction, brand strategy, and innovative thinking.',
    strengths: ['Creative Leadership', 'Brand Vision', 'Innovation', 'Strategic Thinking'],
    growth: 'Expanding creative capabilities while maintaining brand consistency.'
  },
  {
    name: 'Catharine Yoder',
    role: 'Associate Creative',
    story: 'Supporting HEALLY\'s creative initiatives with fresh perspectives and detailed execution. Catharine brings both creativity and attention to detail.',
    skills: 'Creative execution, design thinking, and brand implementation.',
    strengths: ['Creative Design', 'Attention to Detail', 'Brand Consistency'],
    growth: 'Developing creative leadership skills while expanding technical capabilities.'
  },
  {
    name: 'Shivam Patel',
    role: 'Content Associate',
    story: 'Creating engaging content that connects with HEALLY\'s audience. Shivam brings creativity and empathy to content creation.',
    skills: 'Content creation, audience engagement, and creative writing.',
    strengths: ['Content Creation', 'Audience Engagement', 'Creativity'],
    growth: 'Developing content strategy skills while maintaining creative quality.'
  },
  {
    name: 'Sean Segre',
    role: 'Head of Short Form Content',
    story: 'Leading HEALLY\'s short-form content strategy with innovative approaches to engagement. Sean ensures our message is concise and impactful.',
    skills: 'Short-form content strategy, social media expertise, and creative direction.',
    strengths: ['Content Strategy', 'Social Media', 'Creative Direction'],
    growth: 'Scaling content operations while maintaining engagement quality.'
  },
  {
    name: 'Maxwell Simbuwa',
    role: 'Head of Long Form Content',
    story: 'Directing HEALLY\'s long-form content strategy with depth and insight. Maxwell ensures our detailed content maintains quality and engagement.',
    skills: 'Long-form content strategy, editorial direction, and content planning.',
    strengths: ['Content Strategy', 'Editorial Excellence', 'Strategic Planning'],
    growth: 'Expanding content capabilities while maintaining editorial standards.'
  }
]

export default function TeamStory() {
  const [selectedMember, setSelectedMember] = useState(teamStories[0])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Journey Together</h2>
          <p className="mt-4 text-xl text-gray-600">
            Every member of our team brings a unique story and perspective to HEALLY's mission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team member selection sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {teamStories.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedMember.name === member.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-blue-50'
                }`}
              >
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm opacity-80">{member.role}</p>
              </button>
            ))}
          </div>

          {/* Story display area */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h2>
              <p className="text-blue-600 font-medium">{selectedMember.role}</p>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900">The Journey</h3>
              <p className="text-gray-600 mb-6">{selectedMember.story}</p>

              <h3 className="text-lg font-semibold text-gray-900">Skills & Expertise</h3>
              <p className="text-gray-600 mb-6">{selectedMember.skills}</p>

              <h3 className="text-lg font-semibold text-gray-900">Core Strengths</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedMember.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">Growth Journey</h3>
              <p className="text-gray-600">{selectedMember.growth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 