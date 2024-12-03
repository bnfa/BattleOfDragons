import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { dragonsReducer } from '../reducers/dragons.reducer';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
