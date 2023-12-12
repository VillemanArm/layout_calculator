import {configureStore} from '@reduxjs/toolkit' // подключаем хранилище
import slice from './slice'

export default configureStore({ // экспортируем настроенное хранилище
    reducer: {
        name: slice, // имя редюсера и сам редюсер
    }
})