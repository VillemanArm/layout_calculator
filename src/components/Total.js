import {useSelector, useDispatch} from "react-redux"
import {clear} from "../store/calculatorSlice"


const Component = () => {
    const total = useSelector(store => store.calculator.totalCost) 

    const dispatch = useDispatch() 
    const clearServices = () => dispatch(clear()) 

    const showClearBtn = () => {
        if (total) {
            return (<button onClick={clearServices}>Clear</button>)
        }
    }

    return (
        <div className="total">
            <span>Total cost: {total} USD</span>
            {showClearBtn()}  
        </div>
    )
}

export default Component

