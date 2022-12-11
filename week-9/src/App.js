import React from "react";
import "./App.scss";
import { Navbar, Showcase, Lessons, Services, Projects } from "./components";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <Navbar
                    links={[
                        "Home",
                        "About Us",
                        "Lessons",
                        "Portfolio",
                        "Blog",
                        "Contact",
                    ]}
                />
                <Showcase
                    title1='Check our video'
                    title2='learning in 6 weeks'
                />
                <Services
                    titles={[
                        "Recording services",
                        "Get a printed certificate",
                        "Lessons via Skype",
                    ]}
                />
                <Lessons
                    title='Our Lessons are easy'
                    lessons={[
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis.",
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis.",
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis.",
                    ]}
                />
                <Projects
                    project={[
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                        "150 x 150",
                    ]}
                />
            </div>
        );
    }
}

export default App;
