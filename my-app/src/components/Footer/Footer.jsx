import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { svg } from "../../constants";

const { logo, instagram, youtube, twitter } = svg;

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-grid-item d-flex">
                        <img src={logo} alt="" className="logo" />
                        <p className="text-secondary logo-text">
                            Takeaway & Delivery template for small - medium
                            businesses.
                        </p>
                    </div>
                    <div className="footer-grid-item d-flex"></div>
                    <div className="footer-grid-item d-flex">
                        <p className="footer-grid-item-title">Company</p>
                        <Link to="/home" className="link text-secondary">
                            Home
                        </Link>
                        <Link to="/order" className="link text-secondary">
                            Order
                        </Link>
                        <Link to="/faq" className="link text-secondary">
                            FAQ
                        </Link>
                        <Link to="/contact" className="link text-secondary">
                            Contact
                        </Link>
                    </div>
                    <div className="footer-grid-item d-flex">
                        <p className="footer-grid-item-title">Template</p>
                        <Link to="/" className="link text-secondary">
                            Style Guide
                        </Link>
                        <Link to="/" className="link text-secondary">
                            Changelog
                        </Link>
                        <Link to="/" className="link text-secondary">
                            License
                        </Link>
                        <Link to="/" className="link text-secondary">
                            Webflow University
                        </Link>
                    </div>
                    <div className="footer-grid-item d-flex">
                        <p className="footer-grid-item-title">Flowbase</p>
                        <Link to="/" className="link text-secondary">
                            More Cloneables
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="footer-legal d-flex">
                    <div className="item1">
                        Built by{" "}
                        <span className="text-primary underline">Flowbase</span>
                        . Powered by{" "}
                        <span className="text-primary underline">Webflow</span>
                    </div>
                    <div className="item2 d-flex">
                        <div className="social-media-icon d-flex center">
                            <img src={instagram} alt="" />
                        </div>
                        <div className="social-media-icon d-flex center">
                            <img src={twitter} alt="" />
                        </div>
                        <div className="social-media-icon d-flex center">
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
