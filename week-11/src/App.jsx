import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
    Navbar,
    Showcase,
    Lessons,
    Services,
    Blog,
    Contact
} from "./components";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <Navbar
                    links={["home", "aboutus", "lessons", "blog", "contact"]}
                />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Showcase
                                title1='Check our video'
                                title2='learning in 6 weeks'
                            />
                        }
                    />
                    <Route
                        path='aboutus'
                        element={
                            <Services
                                titles={[
                                    "Recording services",
                                    "Get a printed certificate",
                                    "Lessons via Skype"
                                ]}
                            />
                        }
                    />
                    <Route
                        path='lessons'
                        element={
                            <Lessons
                                title='Our Lessons are easy'
                                lessons={[
                                    "Gratitude attracts more of the things you want in life",
                                    "No dream is too big",
                                    "Listen to your heart and intuition"
                                ]}
                            />
                        }
                    />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </div>
        );
    }
}

export default App;
