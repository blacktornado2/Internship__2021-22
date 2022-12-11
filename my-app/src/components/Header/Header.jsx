import React from "react";

import "./Header.scss";

const Header = ({ html }) => {
    return (
        <div className="header text-center d-flex center ">
            <h1 className="bolder">{html}</h1>
        </div>
    );
};

export default Header;
