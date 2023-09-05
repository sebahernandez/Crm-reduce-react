export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add":
      /* return [...state, action.payload]; */
      throw new Error("No se puede añadir");
    default:
      return initialState;
  }
};
