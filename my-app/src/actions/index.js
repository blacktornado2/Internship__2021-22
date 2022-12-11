import axios from "axios";

export const clickHandler = value => {
    return {
        type: "SHOW_MODAL",
        payload: {
            isOpen: value
        }
    };
};

export const fetchData = category => async dispatch => {
    const response = await axios.get(
        `https://bestonlinecenter.com/mini-project/${category}.json`
    );
    console.log(response.data);
    dispatch({
        type: `FETCH_${category.toUpperCase()}`,
        payload: response.data
    });
};

export const addItems = value => {
    const newItem = value;
    return {
        type: "ADD_ITEM",
        payload: {
            item: newItem
        }
    };
};
