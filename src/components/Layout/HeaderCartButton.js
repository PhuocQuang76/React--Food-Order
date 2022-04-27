import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    //Atablish connection with CartContext, when the value over there changed,
    //the value here also change.
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const initialValue = 0;
    const { items } = cartCtx; //cach pull items from cartCtxx;
    // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) =>
    //chi cann viet items o can cartCtx.items
    const numberOfCartItems = items.reduce((curNumber, item) =>
    {
        return curNumber + item.amount
    },initialValue);


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        console.log("test 1");

        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            console.log("timeout");

            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            console.log("return");

            clearTimeout(timer);
        };
    }, [items]);

    return(
        /*
        reduce();
        const array1 = [1, 2, 3, 4];
        // 0 + 1 + 2 + 3 + 4
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );

        console.log(sumWithInitial);
        // expected output: 10
                 */
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>

    );
}
export default HeaderCartButton;