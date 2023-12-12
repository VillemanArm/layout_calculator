import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({ 
    name: 'todos',
    initialState: {
        todos: [] // начальные значения
    },
    reducers: { // здесь хранятся функции приложения
        addTodo(state, action) { // фнкции принимают состояния и действия
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text, // получение данных из action
                complete: false, 
              })
        }, 
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
                state.todos.map(todo => {                  
                    if (todo.id !== action.payload.id) return todo
              
                    todo.complete = !todo.complete
                    return todo
                  })
               
        },
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer