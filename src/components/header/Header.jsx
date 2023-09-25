import React, { useState } from "react";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <header>
                <div className="container">
                    <nav data-aos="fade-down">
                        <div className="menu-icon" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <ul className={`menu-items-mobile ${menuOpen ? "open" : ""}`}>
                            <li className="close-icon" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faTimes} />
                            </li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="menu-items">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="header__logo">
                            <h1>Landing</h1>
                        </div>
                        <div className="header__nav-btn">
                            <a href="#">Buy Now</a>
                        </div>
                    </nav>

                    <section className="header__info" data-aos="fade-right">
                        <div className="header__info-title">
                            <h1>Introduce Your Product Quickly & Effectively</h1>
                        </div>
                        <div className="header__info-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                            <br /><br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                        <div className="header__info-btn">
                            <a href="$" className="header__info-purchase">Purchase UI Kit</a>
                            <a href="$" className="header__info-learn-more">Learn More</a>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header;
