import React from "react";
import "./Lessons.scss";

class Lessons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='features' id='features'>
                <h1 className='features__heading'>{this.props.title}</h1>
                <div className='features__cards__container'>
                    {this.props.lessons.map(lesson => (
                        <div className='feature__card'>
                            <p>{lesson}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Lessons;
