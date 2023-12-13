import {useSelector, useDispatch} from "react-redux"
import {clear} from "../store/calculatorSlice"


const Component = () => {
    const total = useSelector(store => store.calculator.totalCost) 

    const dispatch = useDispatch() 
    const clearServices = () => dispatch(clear()) 

    const showClearBtn = () => {
        if (total) {
            return (<button className="header__btn" onClick={clearServices}>Clear</button>)
        }
    }

    return (
        <div className="total">
            <span>Total cost:</span>
            <span>{total}</span>
            {showClearBtn()}  
        </div>
    )
}

export default Component

