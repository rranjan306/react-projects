import { ADD_TODO, REMOVE_TODO } from "./actions";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((s) => s.id !== action.payload.id);
    default:
      return state;
  }
};

export default Reducer;
