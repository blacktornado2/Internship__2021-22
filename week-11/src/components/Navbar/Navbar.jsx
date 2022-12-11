import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
// import Timer from "../Timer/Timer";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {/* <Timer /> */}
                <nav className='navbar'>
                    <div className='container'>
                        <ul className='navbar__list'>
                            {this.props.links.map((element, index) => (
                                <li className='navbar__list__item' key={index}>
                                    {" "}
                                    <Link
                                        to={
                                            element === "home"
                                                ? ""
                                                : `${element}`
                                        }
                                    >
                                        {element.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
