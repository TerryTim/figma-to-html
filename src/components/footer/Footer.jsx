import React from "react";
import './footer.css'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedIn.svg'
import Youtube from '../../assets/youtube.svg'

function Footer() {
    return (
        <>
            <footer>
                <div className="container" data-aos="fade-up">
                    <div className="footer__top">
                        <p>©2023 Yourcompany</p>
                        <h2>Landing</h2>
                        <p><a href="#" className="footer__top-purchase">Purchase Now</a></p>
                    </div>
                    <div className="footer__bottom">
                        <ul className="footer__bottom-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="footer__bottom-social">
                            <li>
                                <a href="#"><img src={Facebook} alt="facebook" /></a>
                                <a href="#"><img src={LinkedIn} alt="facebook" /></a>
                                <a href="#"><img src={Twitter} alt="facebook" /></a>
                                <a href="#"><img src={Youtube} alt="facebook" /></a>
                                <a href="#"><img src={Instagram} alt="facebook" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
