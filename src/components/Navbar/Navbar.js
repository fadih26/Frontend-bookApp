import Styles from './Navbar.module.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    const [collapesed, setCollapsed] = useState(false);

    useEffect(() => {
        function updateSize() {
            if (window.innerWidth > 600) {
                setCollapsed(false)
            }

        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const toggleClasses = [Styles.linksWrapperMobile, collapesed ? Styles.activeNav : ''].join(' ');
    const bar1 = [Styles.line1, collapesed ? Styles.a : ''].join(' ');
    const bar2 = [Styles.line2, collapesed ? Styles.a : ''].join(' ');
    const bar3 = [Styles.line3, collapesed ? Styles.a : ''].join(' ');

    return (
        <header className={Styles.header}>
            <nav className={Styles.navBar}>
                <a
                    className={Styles.logoContainer}
                    href="/"
                    aria-label="Go to homepage">

                    <img src={logo} width={200} height={31.5} alt="Codi Chronicles Logo" />

                </a>
                <ul className={Styles.linksWrapper}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='dashboard'>Dashboard</Link></li>

                </ul>
                <ul className={toggleClasses}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='dashboard'>Dashboard</Link></li>

                </ul>

                <div className={Styles.burgerButton} onClick={() => setCollapsed(!collapesed)}>
                    <div className={bar1}></div>
                    <div className={bar2}></div>
                    <div className={bar3}></div>
                </div>

            </nav>
        </header>
    )
}


export default Navbar