import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '../images/Logo.svg'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isToggleOpen, setToggleOpen] = useState(false);

    console.log(isToggleOpen)
    console.log(windowWidth)

    useEffect(() => {
        function watchWidth() {
            console.log("Setting up..")
            setWindowWidth(window.innerWidth)
            if (windowWidth >= 767) {
                setToggleOpen(false)
            }
        }
        window.addEventListener("resize", watchWidth)
        return function () {
            console.log("Cleaning up..")
            window.removeEventListener("resize", watchWidth)
        }
    }, [windowWidth])

    return (
        <div className="header">
            <section>
                <nav className="header--container">
                    <div className="header--logo">
                        <Link to="/"><img src={Logo} alt='AT Digital' /></Link>
                    </div>
                    <div>
                        <div className="header--nav">
                            <Link to="services" className="nav--item">SERVICES</Link>
                            <Link to="about" className="nav--item">ABOUT US</Link>
                            <Link to="contact" className="nav--item">CONTACT US</Link>
                            <Link to="careers" className="nav--item">CAREERS</Link>
                        </div>
                        <button className='toggle'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            {isToggleOpen === false ? <MenuIcon className="toggle-style" /> : <CloseIcon className="toggle-style" />}
                        </button>
                    </div>
                </nav>
                <div className={`sidebar ${isToggleOpen ? "toggle-open" : "toggle-close"}`}>
                    <section>
                        <button
                            className='sidebar--item-button'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            <Link to="/" className="sidebar--item">HOME</Link>
                        </button>
                        <button
                            className='sidebar--item-button'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            <Link to="services" className="sidebar--item">SERVICES</Link>
                        </button>
                        <button
                            className='sidebar--item-button'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            <Link to="about" className="sidebar--item">ABOUT</Link>
                        </button>
                        <button
                            className='sidebar--item-button'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            <Link to="contact" className="sidebar--item">CONTACT US</Link>
                        </button>
                        <button
                            className='sidebar--item-button'
                            onClick={() => setToggleOpen(!isToggleOpen)}>
                            <Link to="careers" className="sidebar--item">CAREERS</Link>
                        </button>
                    </section>
                </div>

            </section>

        </div>
    )
}

