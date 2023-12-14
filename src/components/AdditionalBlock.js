import { useDispatch, useSelector } from "react-redux"
import {changeAdditional, calculate} from "../store/calculatorSlice"
import { useEffect } from "react"

const Component = () => {
    const additionalServices = useSelector(store => store.calculator.additional) 

    const dispatch = useDispatch() 
    
    useEffect(() => { dispatch(calculate()) })    
    
    return (
        <div className="additional service-block">
            {additionalServices.map(service => {
                return (
                    <div key={service.name} className="additional__service">                       
                        <span>{service.name}</span>
                        <span>cost: +{service.percentCost}%</span>
                        <div>
                        <input 
                                className="checkbox"
                                type="checkbox"  
                                id={service.name} 
                                onChange={e => {
                                    dispatch(changeAdditional({name: service.name, isSelected: e.target.checked}))
                                }} 
                            />
                        <label htmlFor={service.name} className="checkbox-label">

                        </label>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Component

