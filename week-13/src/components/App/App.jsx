import React from "react";

import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <SearchBar />
            <CardList />
        </div>
    );
};

export default App;
