import React, { useState } from "react";

import "./FAQ.scss";
import Header from "../Header/Header";
import Accoridan from "../Accordian/Accordian";

const FAQ = () => {
    const [selected, setSelected] = useState(0);
    const renderHTML = () => {
        return (
            <React.Fragment>
                Frequently Asked <br />
                <span className="text-primary"> Questions</span>
            </React.Fragment>
        );
    };

    const buttons = ["Our Food", "Our Delivery", "Our Company"];

    return (
        <div className="faq d-flex">
            <Header html={renderHTML()} />
            <h1 className="faq-heading text-center"></h1>
            <div className="buttons d-flex">
                {buttons.map((button, idx) => {
                    return selected === idx ? (
                        <button
                            className="btn btn-primary"
                            onClick={() => setSelected(idx)}
                        >
                            {button}
                        </button>
                    ) : (
                        <button
                            className="btn"
                            onClick={() => setSelected(idx)}
                        >
                            {button}
                        </button>
                    );
                })}
            </div>
            <Accoridan />
        </div>
    );
};

export default FAQ;
