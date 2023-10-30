import Styles from './Hero.module.css'
import heroImg from '../../assets/images/hero.webp'
import Navbar from '../Navbar/Navbar.js'


const Hero =() =>{
    return (
 <section className={Styles.heroSection}>
    <Navbar />
 <h1>Get immersed in your <span>reading</span> journey</h1>
 <img className={Styles.heroImg} src={heroImg} alt="story" />
 </section>
    )
  }
  
  
  export default Hero