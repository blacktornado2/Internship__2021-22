import React from "react";

import "./Company.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";

import { images, svg } from "../../constants";

const { team } = images;

const Company = () => {
    const renderHTML = () => {
        return (
            <React.Fragment>
                Our company focuses <br />
                on
                <span className="text-primary"> food and people.</span>
            </React.Fragment>
        );
    };
    return (
        <div className="company d-flex-col">
            <Header html={renderHTML()} />
            <Container
                html={
                    <React.Fragment>
                        <span className="text-primary">
                            The home of <br />
                            fresh products{" "}
                        </span>
                    </React.Fragment>
                }
                buttonText="Learn about us"
                buttonPath="/company"
                image={team}
                reviewSection={null}
            />

            <div className="parallax d-flex center">
                <div className="parallax-item">
                    <h1 className="text-white">62</h1>
                    <p className="text-white">Fiesty Menu Items</p>
                </div>
                <div className="parallax-item">
                    <h1 className="text-white">139</h1>
                    <p className="text-white">Fiesty Menu Items</p>
                </div>
                <div className="parallax-item">
                    <h1 className="text-white">34</h1>
                    <p className="text-white">Fiesty Menu Items</p>
                </div>
                <div className="parallax-item">
                    <h1 className="text-white">57</h1>
                    <p className="text-white">Fiesty Menu Items</p>
                </div>
            </div>
        </div>
    );
};

export default Company;
