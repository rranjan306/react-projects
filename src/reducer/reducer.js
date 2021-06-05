import { ADD, REMOVE } from "../action/action-type";

const centralStore = [];

export default (state = centralStore, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((s) => s !== action.payload);

    default:
      return state;
  }
};
