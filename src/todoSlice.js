import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const {title, description} = action.payload;
            state.push({
                id: Date.now(),
                title,
                description,
                isPinned: false
            });
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const {id, title, description} = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
            }
        }
    },
})

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;