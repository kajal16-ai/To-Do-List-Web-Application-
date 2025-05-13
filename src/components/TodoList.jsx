import React from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { List, FilterButton, FilterContainer } from "../styles";

const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const filteredTodos = state.todos.filter(todo =>{
    if (state.filter === 'active') return !todo.completed
    if (state.filter === "completed" )return todo.completed
    else return true;
  })
  return (
    <>
      <FilterContainer>
        <FilterButton
          onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => dispatch({ type: "SET_FILTER", payload: "active" })}
        >
          Active
        </FilterButton>
        <FilterButton
          onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
        >
          Completed
        </FilterButton>
      </FilterContainer>

      <List>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
