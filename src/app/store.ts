import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
export const createStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  return store;
};
