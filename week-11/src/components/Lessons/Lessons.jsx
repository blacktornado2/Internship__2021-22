import React from "react";
import "./Lessons.scss";

class Lessons extends React.Component {
    render() {
        return (
            <section className='features' id='features'>
                <h1 className='features__heading'>{this.props.title}</h1>
                <div className='features__cards__container'>
                    {this.props.lessons.map((lesson, index) => (
                        <div className='feature__card' key={index}>
                            <p>{lesson}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Lessons;
