import React from "react";
import './services.css'
import Happy_news from '../../assets/undraw_happy_news_hxmt.svg'
import Mention from '../../assets/undraw_mention_6k5d.svg'
import Social_influencer from '../../assets/undraw_social_influencer_sgsv.svg'

function Services() {
    return (
        <>
            <section className="service">
                <div className="service__wrapping">
                    <div className="service__image" data-aos="fade-down-right">
                        <img src={Happy_news} alt="happy news" />
                    </div>
                    <div className="service__info" data-aos="fade-down-left">
                        <h3>Light, Fast & Powerful</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        <br /><br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>

                <div className="service__wrapping">
                    <div className="service__image" data-aos="fade-down-right">
                        <img src={Social_influencer} alt="happy news" />
                    </div>
                    <div className="service__info" data-aos="fade-down-left">
                        <h3>Light, Fast & Powerful</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        <br /><br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>

                <div className="service__wrapping">
                    <div className="service__image" data-aos="fade-down-right">
                        <img src={Mention} alt="happy news" />
                    </div>
                    <div className="service__info" data-aos="fade-down-left">
                        <h3>Light, Fast & Powerful</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        <br /><br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
