import { useSelector } from "react-redux"


const Component = () => {
    const total = useSelector(store => store.calculator.totalCost) 

    
    return (
        <div className="total">
            <span>Total cost:</span>
            <span>{total}</span>
        </div>
    )
}

export default Component

