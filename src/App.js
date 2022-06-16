import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Adding, Box, Container, TodoList } from "./style";
import { MdDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) return { title, id, completed };
      return todo;
    });
    setTodos(newTodo);
    editTodo("");
  };

  useEffect(() => {
    if (editTodo) setInput(editTodo.title);
    else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const handleComplete = (todo) => {
    setTodos(
      todo.map((item) => {
        if (item.id === todo.id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container>
      <Box>
        <Adding>
          <h1>Todos List</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="write your todo here..."
              value={input}
              onChange={onInputChange}
            />
            <button type="submit">{editTodo ? "OK" : "Add"}</button>
          </form>
          <hr />
        </Adding>
        <TodoList>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.title}
                onChange={(e) => e.preventDefault()}
              />
              <button onClick={() => handleComplete(todo)}>
                <MdDone />
              </button>
              <button onClick={() => handleEdit(todo)}>
                <FaRegEdit />
              </button>
              <button onClick={() => handleDelete(todo)}>
                <BsTrash />
              </button>
            </li>
          ))}
        </TodoList>
      </Box>
    </Container>
  );
}

export default App;
