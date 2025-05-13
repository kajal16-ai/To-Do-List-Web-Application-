import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { ListItem, Text, DeleteButton, Checkbox } from "../styles";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const toggleTodo = () =>{
    dispatch({
      type:"TOGGLE_TODO",
      payload:todo.id
    })
  }

  const deleteTodo = () => {
    dispatch({
      type:"DELETE_TODO",
      payload:todo.id
    })
  }


  return (
    <ListItem>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <Text completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
    </ListItem>
  );
};

export default TodoItem;
