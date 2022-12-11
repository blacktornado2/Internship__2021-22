import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchData, clickHandler, addItems } from "../../actions";
import "./Order.scss";
import Header from "../Header/Header";

const Order = ({ fetchData, menuItems, clickHandler, addItems }) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetchData("menu");
    }, []);

    const onClickHandler = category => {
        setCategory(category);
    };

    const renderHTML = () => {
        return (
            <React.Fragment>
                Get your food <span className="text-primary">delivered</span>,{" "}
                <br />
                or <span className="text-primary"> pick-up</span> in store.
            </React.Fragment>
        );
    };

    const renderList = category => {
        let categoryFood = menuItems.filter(item => {
            return item.category === category;
        });

        if (category === null) {
            categoryFood = menuItems.reverse();
        }
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
                                    <p>{food.name}</p>
                                    <div className="price">
                                        $ {food.price} U.S.D.
                                    </div>
                                </div>
                                <p className="para">{food.description}</p>
                                <div className="quantity">
                                    <input
                                        className="number"
                                        defaultValue="1"
                                        type="number"
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
        <div>
            <Header html={renderHTML()} />
            <div className="menu">
                <div className="container">
                    <div className="menu-items">
                        <div className="categories">
                            <button
                                className={
                                    category === null
                                        ? "single-category current"
                                        : "single-category"
                                }
                                onClick={() => onClickHandler(null)}
                            >
                                <div>Full Menu</div>
                            </button>
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
                        <div className="menu-food d-flex">
                            <div className="menu-list">
                                {renderList(category)}
                            </div>
                        </div>
                    </div>
                    {category === null ? (
                        <div className="full-menu d-flex center">
                            <Link className="btn btn-primary" to="/order">
                                Next
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems,
        totalItems: state.totalItems
    };
};

export default connect(mapStateToProps, { fetchData, addItems, clickHandler })(
    Order
);
