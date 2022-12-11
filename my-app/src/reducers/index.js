const initialState = {
    open: false,
    FAQ: {},
    menuItems: [],
    totalItems: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_FAQ": {
            return {
                ...state,
                FAQ: action.payload
            };
        }
        case "FETCH_MENU": {
            return {
                ...state,
                menuItems: action["payload"]["menu-items"]
            };
        }
        case "SHOW_MODAL": {
            return {
                ...state,
                open: action.payload.isOpen
            };
        }
        case "ADD_ITEM": {
            return {
                ...state,
                totalItems: [...state.totalItems, action.payload.item]
            };
        }
        default:
            return state;
    }
};
