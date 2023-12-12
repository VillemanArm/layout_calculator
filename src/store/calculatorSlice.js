import {createSlice} from '@reduxjs/toolkit'

const calculatorSlice = createSlice({ 
    name: 'todos',
    initialState: {
        base: [
            {
                name: 'Simple block',
                description: '',
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
        total: 0
    },
    reducers: { // здесь хранятся функции приложения
        clear(state, action) { // фнкции принимают состояния и действия
            if (state.total > 0) {
                state.base = state.base.map(service => {
                    service.amount = 0
                    return service
                })
                state.additional = state.additional.map(service => {
                    service.isSelected = false
                    return service
                })
                state.total = 0
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
            let total = 0
            state.base.forEach(service => {total += service.cost * service.amount})
            state.additional.forEach(service => {
                if (service.isSelected) total *= (1 + service.percentCost/100)
            })
            
            state.total = total
        }
        },
    }
)

export const {clear, changeBase, changeAdditional, calculate} = calculatorSlice.actions

export default calculatorSlice.reducer