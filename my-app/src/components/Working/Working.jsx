import React from "react";

import "./Working.scss";
import { images } from "../../constants";

const { step1, step2, house } = images;

const Working = () => {
    return (
        <div className="working d-flex">
            <h2 className="text-primary working-item text-center">
                How it works.
            </h2>
            <div className="thumbnails-container working-item d-flex center">
                <div className="thumbnail">
                    <img src={step1} alt="Adapt your menu items" />
                    <h3>Adapt your menu items</h3>
                    <p className="text-secondary">
                        Easily adapt your menu using the webflow CMS and allow
                        customers to browse your items.
                    </p>
                </div>
                <div className="thumbnail">
                    <img src={step2} alt="Accept online orders & takeouts" />
                    <h3>Accept online orders & takeouts</h3>
                    <p className="text-secondary">
                        Let your customers order and pay via the powerful
                        ecommerce system, or simple let them call your store.
                    </p>
                </div>
                <div className="thumbnail">
                    <img src={house} alt="Manage delivery or takeout" />
                    <h3>Manage delivery or takeout</h3>
                    <p className="text-secondary">
                        Manage your own logistics and take orders simply through
                        the ecommerce system.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Working;
