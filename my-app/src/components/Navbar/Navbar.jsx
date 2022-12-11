import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.scss";
import { svg } from "../../constants";

const { logo } = svg;

const Navbar = ({ items }) => {
    let activeStyle = {
        color: "#54b9be"
    };
    return (
        <div className="navbar d-flex ">
            <NavLink to="/">
                <img src={logo} className="navbar__logo" />
            </NavLink>
            <div className="navbar__items d-flex center">
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    className="navbar__item"
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    className="navbar__item"
                    to="/order"
                >
                    Order
                </NavLink>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    className="navbar__item"
                    to="/company"
                >
                    Company
                </NavLink>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    className="navbar__item"
                    to="/FAQ"
                >
                    FAQ
                </NavLink>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    className="navbar__item"
                    to="/contact"
                >
                    Contact
                </NavLink>
                <NavLink to="/order" className="cart-button svg">
                    <svg width="17px" height="17px" viewBox="0 0 17 17">
                        <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <path
                                d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                                fill="white"
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>
                    <div className="items-in-cart text-primary d-flex center">
                        {items.length}
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.totalItems
    };
};

export default connect(mapStateToProps)(Navbar);
