import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./Banner.scss";

const { groupPhoto } = images;

const Banner = () => {
    return (
        <div className="banner d-flex">
            <img src={groupPhoto} alt="" />
            <div className="content">
                <div className="text-content">
                    <h1>
                        <span className="support-text">Support</span>

                        <span className="text-white">
                            {" "}
                            good food and local business.{" "}
                        </span>
                    </h1>
                    <Link to="/order" className="">
                        Order Now{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
