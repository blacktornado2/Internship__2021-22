import React from "react";
import "./Showcase.scss";

class Showcase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='showcase' id='showcase'>
                <h1 className='showcase__heading'>
                    <span className='bold'>{this.props.title1}</span> <br />
                    {this.props.title2}
                </h1>
            </section>
        );
    }
}

export default Showcase;
