import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();

const initialValue = {
    todos: [],
    filter: "all",
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        case "DELETE_TODO":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        case "TOGGLE_TODO":
            return { 
                ...state, 
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case "LOAD_TODOS":
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialValue);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
};
