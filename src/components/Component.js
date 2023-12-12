import { useDispatch, useSelector } from "react-redux"
import {action} from "../store/slice"
import { useState } from "react"

const Component = () => {
    const [text, setText] = useState('')

    const data = useSelector(store => store.name.data) // принимает функцию, которая принимает store и возвращает его содержимое с путем store.reducerName.reducerStateContent

    const dispatch = useDispatch() // нужно прописать, иначе диспетчер не сработает
    const doAction = () => dispatch(action({text})) // функция вызывает диспетчер, который вызывает событие addTodo, данные надо передавать через объектт, чтобы их потом можно было разделить.
    
    return (
        <div className="">
            
        </div>
    )
}

export default Component

