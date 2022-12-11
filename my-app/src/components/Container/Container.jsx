import React from "react";
import { Link } from "react-router-dom";

import "./Container.scss";

const Container1 = ({ html, buttonText, buttonPath, image, reviewSection }) => {
    const content =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.";

    return (
        <div className="container d-flex">
            <div className="text container-item">
                <h1>{html}</h1>
                <p className="text-secondary">{content}</p>
                <Link to={buttonPath} className="btn btn-primary">
                    {buttonText}
                </Link>
                {reviewSection && (
                    <div className="review-section">
                        <img
                            src={reviewSection.image}
                            alt=""
                            className="trust-pilot"
                        />
                        <p>{reviewSection.html}</p>
                    </div>
                )}
            </div>

            <img src={image} alt="" className="container-item hero-image" />
        </div>
    );
};

export default Container1;
