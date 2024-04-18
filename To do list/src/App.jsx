import { TodopProvider } from "./contexts/TodoContext";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //content value (arrat -> todos)
  const [todos, setTodos] = useState([]); // this todos is context value.

  //context methods
  const addTodo = (todo) => {
    setTodos(
      (
        prev //this prev argument represents all the preivious todos
      ) => [
        ...prev, // spread operator
        {
          // add a new todo object with unique id
          id: Date.now(),
          ...todo,
        },
      ] // create todos array with all prev one and new todo
    );
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map(
        (
          prevTodos // looping through every element of the todo array.
        ) => (prevTodos.id === id ? todo : prevTodos)
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodos) => prevTodos.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map(
        (
          prevTodos //looping through every todo object from the todo array.
        ) =>
          prevTodos.id === id
            ? { ...prevTodos, completed: !prevTodos.completed } // if true then this
            : prevTodos
      )
    );
  };

  //useEffect ; when the component is initially rendered the use effect will run after the initial render but before return statement.
  useEffect(() => {
    const todos_from_local_storage = JSON.parse(localStorage.getItem("todos"));
    if (todos_from_local_storage && todos_from_local_storage.length > 0) {
      setTodos(todos_from_local_storage);
    }
  }, []);

  //useEffect ; this useEffect will run every time there is some change in the dependency array.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodopProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodopProvider>
  );
}

export default App;
