import { useDispatch, useSelector } from "react-redux"
import {changeBase, calculate} from "../store/calculatorSlice"
import { useEffect } from "react"

const Component = () => {
    const baseServices = useSelector(store => store.calculator.base) 
    const baseCost = useSelector(store => store.calculator.baseCost) 
    const dispatch = useDispatch() 

    useEffect(() => { dispatch(calculate()) })
    
    return (
        <div className="base service-block">
            {baseServices.map(service => {
                return (
                    <div key={service.name} className="base__service">                       
                        <span 
                            className="base__service-name"
                            onClick={e => {
                                const description = e.target.closest('.base__service').querySelector('.base__service-description')
                                description.classList.toggle('visible')
                                console.log(description)
                            }}
                        >
                            {service.name}
                        </span>
                        <span>cost: {service.cost} USD</span>
                        {/* <span>amount:</span> */}
                        <input 
                            type="number"  
                            min="0" 
                            max='999'
                            onChange={e => {
                                if (e.target.value > 999) {
                                    e.target.value = 999
                                } else if (e.target.value < 0) {
                                    e.target.value = 0
                                }
                                e.target.value = Number(e.target.value)
                                dispatch(changeBase({name: service.name, amount: e.target.value}))
                            }} 
                            value={service.amount}/>
                        <span className="base__service-description">{service.description}</span>
                    </div>
                )
            })
            }
            <div className="base__cost">
                <span>Base cost: {baseCost} USD</span>
            </div>
            
        </div>
    )
}

export default Component

