import React from 'react'
import Hero from '../components/home/Hero'
import Aboutme from '../components/home/Aboutme'
import Header from '../components/home/Header'
import Work from '../components/home/Work'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import { useTheme } from '../context/ThemeContext'
const Home = () => {

  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      현재의 테마: {theme}
      <button onClick={toggleTheme}>테마전환</button>
      <Header />
      <main>
        <section id='Hero'>
          <Hero />
        </section>
        <section id="Aboutme">
          <Aboutme />
        </section>
        <section id="Work">
          <Work />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home