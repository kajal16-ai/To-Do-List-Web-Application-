import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 2em;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Text = styled.span`
  flex: 1;
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
      color: #999;
    `}
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9em;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9em;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: #f8f9fa;
  cursor: pointer;

  &:hover {
    background-color: #e2e6ea;
  }
`;
