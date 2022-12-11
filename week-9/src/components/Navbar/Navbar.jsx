import React from "react";
import "./Navbar.scss";
import Timer from "../Timer/Timer";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Timer />
                <nav className='navbar'>
                    <div className='container'>
                        <ul className='navbar__list'>
                            {this.props.links.map(element => (
                                <li className='navbar__list__item'>
                                    <a href='#projects'>{element}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
