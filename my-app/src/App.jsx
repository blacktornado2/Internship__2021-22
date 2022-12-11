import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Company from "./components/Company/Company";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

const App = ({ isOpen }) => {
    return (
        <BrowserRouter>
            <Alert />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/company" element={<Company />} />
            </Routes>
            <Footer />
            {isOpen ? <Modal /> : null}
        </BrowserRouter>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: state.open
    };
};

export default connect(mapStateToProps)(App);
