import React from "react";
import { connect } from "react-redux";

import Container from "../Container/Container";
import Working from "../Working/Working";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";

import { images, svg } from "../../constants";

const { heroImage, group, phones, foodTakeAway } = images;
const { trustPilot } = svg;

const Home = () => {
    return (
        <div className="home">
            <Container
                html={
                    <React.Fragment>
                        Beautiful food & takeaway,
                        <span className="text-primary"> delivered </span> to
                        your door.
                    </React.Fragment>
                }
                buttonText="Place an Order"
                buttonPath="/order"
                image={heroImage}
                reviewSection={{
                    image: trustPilot,
                    html: (
                        <React.Fragment>
                            {" "}
                            <span className="text-primary">4.8 out of 5 </span>
                            based on 2000+ reviews{" "}
                        </React.Fragment>
                    )
                }}
            />
            <Container
                html={
                    <React.Fragment>
                        <span className="text-primary">
                            The home of <br /> fresh products{" "}
                        </span>
                    </React.Fragment>
                }
                buttonText="Learn about us"
                buttonPath="/company"
                image={group}
                reviewSection={null}
            />
            <Working />
            <Menu />
            <Container
                html={
                    <React.Fragment>
                        <span className="text-primary">
                            Order online with our <br />
                            simple checkout.
                        </span>
                    </React.Fragment>
                }
                buttonText="See our FAQ"
                buttonPath="/faq"
                image={phones}
                reviewSection={null}
            />
            <Container
                html={
                    <React.Fragment>
                        <span className="text-primary">
                            Call our store and <br />
                            takeaway when it suits
                            <br /> you best.
                        </span>
                    </React.Fragment>
                }
                buttonText="Ph. +61 233 2333"
                buttonPath="/company"
                image={foodTakeAway}
                reviewSection={null}
            />

            <Banner />
        </div>
    );
};

export default connect(null, null)(Home);
