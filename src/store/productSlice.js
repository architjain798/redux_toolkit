import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading"
});

const productSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: STATUSES.IDLE
  },
  reducers: {
    setProducts(state, action) {
      //koi bhi api call yahan na kre kyunki reducer sync call hote hai aur vo pure funtion hote hai
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    }
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
