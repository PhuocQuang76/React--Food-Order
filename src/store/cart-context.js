
import React from "react";
const CartContext = React.createContext({
    items:[],
    totalAmount:0,

    addItem: (item) => {}, //just Need dummy function
    removeItem: (id) => {}
});

export default CartContext;