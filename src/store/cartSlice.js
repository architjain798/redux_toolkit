import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //Redux
      //return [...state,action.payload]
      //directyl muttate kr skte hau vo internaly vhi kr rha hota hai
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//reducer are always pure function
//pure function vo hoti hai jiska koi side effect nhi hota hai
