import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1, text: "Hello worls"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>                    //state represent the current state of the slice.
                                                       //action represent all the values , property etc of the slice.
        {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            
        },
        removeTodo: (state, action) =>
        {   
            console.log(action.payload)
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
            
        }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions //syntax, because we only update the state through these methods of reducers.

export default todoSlice.reducer


