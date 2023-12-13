import {createSlice} from '@reduxjs/toolkit'

const calculatorSlice = createSlice({ 
    name: 'todos',
    initialState: {
        base: [
            {
                name: 'Simple block',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur, modi perferendis vel a deserunt cupiditate quibusdam odit nesciunt, culpa distinctio corporis aspernatur',
                cost: 3,
                amount: 0
            },
            {
                name: 'Complicated block',
                description: '',
                cost: 5,
                amount: 0
            },

        ],
        additional: [
            {
                name: 'Tablet layout',
                percentCost: 10,
                isSelected: false,
            },
            {
                name: 'Mobile layout with design',
                percentCost: 20,
                isSelected: false,
            },
            {
                name: 'Mobile layout without design',
                percentCost: 35,
                isSelected: false,
            },
        ],
        totalCost: 0,
        baseCost: 0
    },
    reducers: { // здесь хранятся функции приложения
        clear(state, action) { // фнкции принимают состояния и действия
            if (state.totalCost > 0) {
                state.base = state.base.map(service => {
                    service.amount = 0
                    return service
                })
                state.additional = state.additional.map(service => {
                    service.isSelected = false
                    return service
                })
                state.totalCost = 0
                state.baseCost = 0
            }          
        }, 

        changeBase(state, action) {
            state.base = state.base.map(service => {
                if (service.name === action.payload.name) {
                    service.amount = action.payload.amount
                }
                return service
            })
        },       

        changeAdditional(state, action) {
            state.additional = state.additional.map(service => {
                if (service.name === action.payload.name) {
                    service.isSelected = action.payload.isSelected
                }
                return service
            })
        },  
        
        calculate(state, action) {
            let baseCost = 0    
            state.base.forEach(service => {baseCost += service.cost * service.amount})
            state.baseCost = baseCost

            let fullCost = baseCost
            state.additional.forEach(service => {
                if (service.isSelected) fullCost += baseCost * service.percentCost/100
            })
            
            state.totalCost = Math.ceil(fullCost)
        }
        },
    }
)

export const {clear, changeBase, changeAdditional, calculate} = calculatorSlice.actions

export default calculatorSlice.reducer