import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        todos: [                                       
            {
                id: 1,
                title: "Todo msg",
                completed: false,
            }
        ],
        addTodo: (todo) => {},    //only name and initialization.
        updateTodo: (id, todo) => { },
        deleteTodo: (id) => { },
        toggleComplete : (id) => {}
    }
)  

export const TodopProvider = TodoContext.Provider 

export const useTodo = () =>
{
    return useContext(TodoContext)
}