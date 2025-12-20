import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {items: []},
    reducers: {
        addTodo: (state, action) => {
            const {title, description} = action.payload
            state.items.push({
                id: Date.now(),
                title,
                description,
                isPinned: false
            })
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },
        editTodo: (state, action) => {
            const {id, title, description} = action.payload
            const todo = state.items.find((t) => t.id === id)
            if (todo) {
                todo.title = title
                todo.description = description
            }
        },
        togglePin: (state, action) => {
            const id = action.payload
            const todo = state.items.find((t) => t.id === id)
            if (!todo) return

            const pinnedCount = state.items.filter((t) => t.isPinned).length
            if (!todo.isPinned && pinnedCount >= 3) return

            todo.isPinned = !todo.isPinned
        },
        reorderUnpinned: (state, action) => {
            const {fromIndex, toIndex} = action.payload
            const pinned = state.items.filter((t) => t.isPinned)
            const others = state.items.filter((t) => !t.isPinned)

            const [moved] = others.splice(fromIndex, 1)
            others.splice(toIndex, 0, moved)

            state.items = [...pinned, ...others]
        },
    },
})

export const {addTodo, deleteTodo, editTodo, togglePin, reorderUnpinned} = todoSlice.actions;
export default todoSlice.reducer;