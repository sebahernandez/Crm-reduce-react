import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
    done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="¿Que hay que hacer?"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-3">
          Agregar
        </button>
      </form>
    </>
  );
};
