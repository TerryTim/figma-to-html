import React from "react";
import './pricing.css'

function Pricing() {
    return (
        <>
            <section className="pricing">
                <div className="container">
                    <div className="pricing__info" data-aos="zoom-in">
                        <h2>A Price To Suit Everyone</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    </div>

                    <div className="pricing__price" data-aos="zoom-in">
                        <span className="pricing__price-number">$40</span>
                        <span className="pricing__price-title">UI Design Kit</span>
                    </div>

                    <div className="pricing__simple" data-aos="zoom-in">
                        <p>See, One price. Simple.</p>
                        <a href="#" className="pricing__simple-btn">Purchase Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;
