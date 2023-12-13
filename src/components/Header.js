import { useDispatch} from "react-redux"
import {clear} from "../store/calculatorSlice"


const Component = () => {
    const dispatch = useDispatch() 
    const clearServices = () => dispatch(clear()) 
    
    return (
        <div className="header">
            <h2>Layout calculator</h2>
            <button className="header__btn" onClick={clearServices}>Clear</button>
        </div>
    )
}

export default Component

