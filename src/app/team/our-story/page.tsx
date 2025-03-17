import Navigation from '@/components/Navigation'
import TeamStory from '@/components/TeamStory'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="pt-20">
        <TeamStory />
        <SocialLinks />
        <Footer />
      </div>
    </main>
  )
} 