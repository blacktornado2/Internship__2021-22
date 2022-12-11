import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Modal.scss";
import { clickHandler } from "../../actions/index";

const Modal = ({ clickHandler, totalItems }) => {
    let totalCost = totalItems.map(item => {
        return Number(item.price);
    });

    let amount = totalCost.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    const initialBody = () => {
        return (
            <div className="modal-body d-flex-col">
                <div className="modal-initial-body d-flex-col center">
                    <div className="modal-statement">
                        We couldn't find any items in your cart.
                    </div>
                    <div className="start-order d-flex">
                        <a
                            href="/order"
                            className="order-btn btn btn-primary text-center"
                        >
                            Start an Order
                        </a>
                        <img
                            className="arrow-image"
                            src="images/Drawn-Arrow.svg"
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
        );
    };

    const selectedItems = () => {
        return (
            <div className="modal-body">
                <div className="modal-content d-flex">
                    <div className="modal-container d-flex">
                        {totalItems.map(item => (
                            <div className="modal-item d-flex">
                                <img
                                    src={item.image}
                                    alt="item"
                                    className="selectedImg"
                                />
                                <div className="selected-content d-flex">
                                    <h4 className="selected-title">
                                        {item.name}
                                    </h4>
                                    <p className="selected-price">
                                        $&nbsp;{item.price}&nbsp;USD
                                    </p>
                                    <a href="#" className="remove">
                                        Remove
                                    </a>
                                </div>
                                <input
                                    type="number"
                                    className="number"
                                    defaultValue="1"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal-footer d-flex">
                    <div className="modal-total d-flex">
                        <div className="subtotal">Subtotal</div>
                        <div className="amount">$&nbsp;{amount}&nbsp;USD</div>
                    </div>
                    <div className="checkout ">
                        <a
                            href="#"
                            className="checkout-btn d-flex center text-center"
                        >
                            Continue to Checkout
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return ReactDOM.createPortal(
        <div className="modal-dim d-flex" onClick={() => clickHandler(false)}>
            <div
                onClick={e => e.stopPropagation()}
                className="modal-visible d-flex"
            >
                <div className="modal-header d-flex">
                    <h4 className="modal-title">Your Order</h4>
                    <Link
                        to="#"
                        className="modal-close"
                        onClick={() => {
                            clickHandler(false);
                        }}
                    >
                        X{" "}
                    </Link>
                </div>
                {amount === 0 ? initialBody() : selectedItems()}
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

const mapStateToProps = state => {
    return {
        totalItems: state.totalItems
    };
};

export default connect(mapStateToProps, { clickHandler })(Modal);
