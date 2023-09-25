import React from "react";
import './about.css'
import Icon from '../../assets/icon.svg'
import Mobile_login from '../../assets/undraw_mobile_login_ikmv.svg'

function About() {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about__wrapping">
                        <div className="about__info" data-aos="fade-right">
                            <div className="about__info-title">
                                <h2>Light, Fast & Powerful</h2>
                            </div>
                            <div className="about__info-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    <br /><br /> 
                                    mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                            <div className="about__info-box">
                                <div className="about__info-box_items">
                                    <img src={Icon} alt="icon" />
                                    <h3>Title Goes Here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                                <div className="about__info-box_items">
                                    <img src={Icon} alt="icon" />
                                    <h3>Title Goes Here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                            </div>
                        </div>

                        <div className="about__image" data-aos="fade-left">
                            <img src={Mobile_login} alt="mobile login" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
