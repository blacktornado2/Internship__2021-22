import React from "react";
import "./Projects.scss";

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='projects' id='projects'>
                <h2 className='projects__heading'>Our projects</h2>
                <div className='projects__container bold'>
                    {this.props.project.map(title => (
                        <div className='project'>{title}</div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Projects;
