import { configureStore } from '@reduxjs/toolkit'

import windowsReducer, {
    resize
} from './reducers/windowsReducer'

export const store = configureStore({
    reducer: {
        windows: windowsReducer,
    }
})

export const actions = {
    resize
}