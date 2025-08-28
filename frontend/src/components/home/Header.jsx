import React ,{useEffect,useState}from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled]=useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>50){

      }else{

      }
    }


  },[])

  return (
    <header className={``}>
      <div className="inner">
        <h4>LOGO</h4>
        <div className="right-wrap">

          <Nav />
          <button className='btn' onClick={toggleTheme}>{theme}</button>

        </div>
      </div>
    </header>
  )
}

export default Header