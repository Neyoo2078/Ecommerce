import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthSlice from '../Reducers/Authreducer';
import ProductSlice from '../Reducers/ProductReducer';

export const store = configureStore(
  {
    reducer: { Auth: AuthSlice, products: ProductSlice },
  },
  compose(applyMiddleware(thunk))
);
