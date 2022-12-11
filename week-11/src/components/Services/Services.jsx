import React from "react";
import "./Services.scss";
import { images } from "../../constants";

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.imagesArr = [images.icon1, images.icon2, images.icon3];
    }

    render() {
        return (
            <section className='services' id='services'>
                <h2 className='services__heading'>Services</h2>
                <div className='services__icon__container'>
                    {this.props.titles.map((title, index) => (
                        <div className='services__icon__item' key={index}>
                            <img src={this.imagesArr[index]} alt='' />
                            <h4>{title}</h4>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Services;
