import
    React, {useRef, useState} from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) =>{
    const [amountIsValid,setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; //convert string to number
        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 0 ||
            enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        setAmountIsValid(true);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            {/*//Neu chi viet nhu vay thi se khong duoc.*/}
            {/*//Phai di den Input Componnent va forwardRef.*/}
            {/*//const Input = React.forwardRef((props, ref) => {*/}
            {/*// return(*/}
            {/*//    <div>*/}
            {/*//       <input ref ={ref}*/}
            {/*//    </div>*/}

            <Input
                ref={amountInputRef}
                label ="Amount"
                input={{
                    id:'amount',
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }}
            />
            <button >+ Add</button>
            {!amountIsValid && <p>Please enter valid amount from1 to 5.</p>}
        </form>
    );
}

export default MealItemForm;