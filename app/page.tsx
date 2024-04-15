import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Pitch from '@/components/Pitch'
import ProfileIcon from '@/components/ProfileIcon'
import Timeline from '@/components/Timeline'

const Home = () => (
  <main className="min-h-screen p-8 md:p-0 md:pt-12">
    <div className="flex flex-col-reverse space-y-6 space-y-reverse md:flex-row border-b-2">
      <div className="space-y-5 md:mr-4">
        <Header />
        <Pitch />
      </div>
      <ProfileIcon />
    </div>
    <Timeline />
    <ContactForm />
  </main>
)

export default Home
