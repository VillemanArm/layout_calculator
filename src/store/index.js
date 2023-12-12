import {configureStore} from '@reduxjs/toolkit' // подключаем хранилище
import calculatorSlice from './calculatorSlice'

export default configureStore({ // экспортируем настроенное хранилище
    reducer: {
        calculator: calculatorSlice, // имя редюсера и сам редюсер
    }
})