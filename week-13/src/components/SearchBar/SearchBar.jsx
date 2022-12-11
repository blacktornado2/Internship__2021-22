import React, { useState } from "react";
import { connect } from "react-redux";

import "./SearchBar.scss";
import { onChangeSearchTerm } from "../../actions";

const SearchBar = ({ onChangeSearchTerm }) => {
    const [searchInput, setSearchTermInput] = useState("");
    return (
        <div className="search-input">
            <input
                type="text"
                name=""
                id=""
                value={searchInput}
                onChange={e => {
                    setSearchTermInput(e.target.value);
                    if (e.target.value === "") {
                        onChangeSearchTerm("");
                    }
                }}
                onKeyUp={e => {
                    if (e.key === "Enter") {
                        console.log(`sahi hai`);
                        onChangeSearchTerm(searchInput);
                    }
                }}
                placeholder="Enter Search Text"
            />
        </div>
    );
};

export default connect(null, { onChangeSearchTerm })(SearchBar);
