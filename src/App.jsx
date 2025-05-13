import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import { useTodoContext } from "./context/TodoContext"; 
import { Container, Header } from "./styles";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const { state, dispatch } = useTodoContext(); 
  const [storeTodo, setStoreTodo] = useLocalStorage("todos", []);

  useEffect(() => {
    dispatch({
      type: "LOAD_TODOS",
      payload: storeTodo,
    });
  }, []);

  useEffect(() => {
    setStoreTodo(state.todos);
  }, [state.todos]);

  return (
    <Container>
      <Header>TODO APP</Header>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default App;
