import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Form, Input, Button } from "../styles";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  const handleSubmit = (ev) =>{
    ev.preventDefault();
    if(text.trim()){
        dispatch({
            type: "ADD_TODO",
            payload:{
                id:Date.now(),
                text,
                completed: false
            }
        });
        setText("");
    };
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Add Todo</Button>
      </Form>
    </div>
  );
};

export default TodoForm;
