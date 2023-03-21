import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { setupListeners } from '@reduxjs/toolkit/query'
import { todoApiService } from "../features/api";

export const store = configureStore({
  reducer: {
    [todoApiService.reducerPath]: todoApiService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApiService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
setupListeners(store.dispatch)