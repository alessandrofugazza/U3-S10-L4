const initialState = {
  cart: {
    content: [],
  },
  bookSelected: {
    content: null,
  },
  admin: { content: "" },
  isLoggedIn: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload],
        },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((_, i) => i !== action.payload),
        },
      };

    case "SELECT_BOOK":
      return {
        ...state,
        bookSelected: {
          ...state.bookSelected,
          content: action.payload,
        },
      };
    case "SET_ADMIN":
      return {
        ...state,
        admin: {
          ...state.admin,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
