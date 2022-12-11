import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Menu.scss";
import { fetchData, clickHandler, addItems } from "../../actions";

const Menu = ({ menuItems, fetchData, clickHandler, addItems }) => {
    const [category, setCategory] = useState("Burgers");

    useEffect(() => {
        fetchData("menu");
    }, []);

    const onClickHandler = category => {
        setCategory(category);
    };

    const renderList = category => {
        const categoryFood = menuItems.filter(item => {
            return item.category === category;
        });

        return (
            <div className="items">
                {categoryFood.map((food, idx) => (
                    <div key={idx} className="item">
                        <div className="item-card">
                            <img
                                src={food.image}
                                alt="fooditem"
                                className="item-img"
                            />
                            <div className="item-content">
                                <div className="title">
                                    <h6>{food.name}</h6>
                                    <div className="price">
                                        $ &nbsp; {food.price} &nbsp; USD
                                    </div>
                                </div>
                                <p className="para">{food.description}</p>
                                <div className="quantity">
                                    <input
                                        className="number"
                                        type="number"
                                        defaultValue="1"
                                        min="1"
                                        name="item-quantity"
                                    />
                                    <button
                                        onClick={() => {
                                            clickHandler(true);
                                            addItems(food);
                                        }}
                                        className="add-btn"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="menu">
            <div className="container">
                <div className="menu-content d-flex center">
                    <h2 className="text-primary">Browse our menu</h2>
                    <p>
                        Use our menu to place an order online, or
                        <a href="text-primary underline">phone</a>
                        our store to <br></br>
                        place a pickup order. Fast and fresh food.
                    </p>
                </div>
                <div className="menu-items">
                    <div className="categories">
                        <button
                            className={
                                category === "Burgers"
                                    ? "single-category current"
                                    : "single-category"
                            }
                            onClick={() => onClickHandler("Burgers")}
                        >
                            <div>Burgers</div>
                        </button>
                        <button
                            className={
                                category === "Sides"
                                    ? "single-category current"
                                    : "single-category"
                            }
                            onClick={() => onClickHandler("Sides")}
                        >
                            <div>Sides</div>
                        </button>
                        <button
                            className={
                                category === "Drinks"
                                    ? "single-category current"
                                    : "single-category"
                            }
                            onClick={() => onClickHandler("Drinks")}
                        >
                            <div>Drinks</div>
                        </button>
                    </div>
                    <div className="menu-food">
                        <div className="menu-list">{renderList(category)}</div>
                    </div>
                </div>
                <div className="full-menu d-flex center">
                    <Link className="btn btn-primary" to="/order">
                        See Full Menu
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems
    };
};
export default connect(mapStateToProps, { fetchData, clickHandler, addItems })(
    Menu
);
