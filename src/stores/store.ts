import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counter/counter";

export function makeStore() {
  return configureStore({
    reducer: {counter: counterSlice.reducer},
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export default store;
