import { CARTDATA, DESDATA, FILTER, GETDATA, CHANGE_USERNAME } from "./action";

const inits = {
  productsData: [],
  desData: {},
  cartdata: [],
  totalprice: 0,
  username: null,
};

export const reducer = (state = inits, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case GETDATA: {
      return { ...state, productsData: action.payload };
    }
    case DESDATA: {
      return {
        ...state,
        desData: action.payload,
      };
    }
    case FILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }
    case CARTDATA: {
      return {
        ...state,
        cartdata: action.payload,
        totalprice: action.payload.reduce((acc, el) => {
          return acc + el.qty * el.price;
        }, 0),
      };
    }
    default: {
      return state;
    }
  }
};
