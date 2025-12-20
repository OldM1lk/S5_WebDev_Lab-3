import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

const STORAGE_KEY = 'tasks'

const loadState = () => {
    try {
        const serialized = localStorage.getItem(STORAGE_KEY)
        if (!serialized) return {todos: {items: []}}
        const state = JSON.parse(serialized)
        if (state.todos?.items) {
            state.todos.items = state.todos.items.map(task => ({
                ...task,
                isPinned: task.isPinned || false
            }))
        }
        return state
    } catch {
        return {todos: {items: []}}
    }
}

const saveState = (state) => {
    try {
        const serialized = JSON.stringify({todos: state.todos})
        localStorage.setItem(STORAGE_KEY, serialized)
    } catch { /* empty */
    }
}

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    preloadedState
})

store.subscribe(() => {
    saveState(store.getState())
})

export default store