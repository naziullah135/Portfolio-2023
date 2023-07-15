import Navbar from '@/components/Common/Navbar'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Projects />
    </main>
  )
}
