import { ADD, REMOVE } from "./action-type";

export const Add = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};

export const Remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
