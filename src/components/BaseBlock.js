import { useDispatch, useSelector } from "react-redux"
import {changeBase, calculate} from "../store/calculatorSlice"
import { useEffect } from "react"

const Component = () => {
    const baseServices = useSelector(store => store.calculator.base) 
    const baseCost = useSelector(store => store.calculator.baseCost) 
    const dispatch = useDispatch() 

    useEffect(() => { dispatch(calculate()) })
    
    return (
        <div className="base">
            {baseServices.map(service => {
                return (
                    <div key={service.name} className="base__service">                       
                        <span>{service.name}</span>
                        <span>cost: {service.cost}</span>
                        <span>amount:</span>
                        <input 
                            type="number"   
                            onChange={e => {
                                dispatch(changeBase({name: service.name, amount: e.target.value}))
                            }} 
                            value={service.amount}/>
                        <div className="service__description"></div>
                        <div className="base__cost">
                            <span>Base cost:</span>
                            <span>{baseCost}</span>
                        </div>
                    </div>
                )
            })
            }
            
        </div>
    )
}

export default Component

