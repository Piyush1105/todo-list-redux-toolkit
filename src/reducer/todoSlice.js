import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newList = {
        id: new Date().getTime().toString(),
        data: action.payload.data,
        dateTime: action.payload.dateTime,
        checked: action.payload.checked,
      };
      state.push(newList);
    },

    deleteTodo: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload.id);
    },

    removeTodo: (state) => {
      return state.slice(-1, 0);
    },

    checkedTodo: (state, action) => {
      return state.map((obj) =>
        obj.id === action.payload.id
          ? {
              ...obj,
              checked: action.payload.checked,
            }
          : obj
      );
    },

    checkedAllTodo: (state) => {
      return state.map((obj) =>
        obj.checked === false
          ? {
              ...obj,
              checked: true,
            }
          : obj
      );
    },
  },
});
export const { addTodo, deleteTodo, removeTodo, checkedTodo, checkedAllTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
