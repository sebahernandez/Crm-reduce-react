import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "../TodoList";
import { TodoAdd } from "../TodoAdd";

function TodoApp() {
  const initialState = [
    {
      id: new Date().getTime(),
      description: "Recolectar piedra del alma",
      done: false,
    },
    {
      id: new Date().getTime() * 3,
      description: "Piedra del alma",
      done: false,
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>
          Todo App 10 - <small>Pendientes:2</small>
        </h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <TodoList todos={todos} />
          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
