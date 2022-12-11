import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../../actions";
import "./Accordian.scss";

const Accordian = ({ fetchData, FAQ }) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchData("faq");
    }, []);

    const toggle = idx => {
        if (selected === idx) {
            return setSelected(null);
        }
        setSelected(idx);
    };

    const faqs = FAQ["Our food"];

    return (
        <div className="wrapperClass d-flex">
            <div className="accordian">
                {faqs &&
                    faqs["queries"].map((item, idx) => (
                        <div key={idx} className="item">
                            <div
                                className="title d-flex"
                                onClick={() => toggle(idx)}
                            >
                                <h4>{item.question}</h4>
                                <div className="plus-box">
                                    <span className="plus rotation">
                                        {selected === idx ? "x" : "+"}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={
                                    selected === idx ? "show" : "faq-content"
                                }
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero vitae erat. Aenean faucibus
                                nibh et justo cursus id rutrum lorem imperdiet.
                                Nunc ut sem vitae risus tristique posuere. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra ornare,
                                eros dolor interdum nulla, ut commodo diam
                                libero vitae erat. Aenean faucibus nibh et justo
                                cursus id rutrum lorem imperdiet. Nunc ut sem
                                vitae risus tristique posuere.
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        FAQ: state.FAQ
    };
};
export default connect(mapStateToProps, { fetchData })(Accordian);
