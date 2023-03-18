import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthSlice from '../Reducers/Authreducer';
import ProductSlice from '../Reducers/ProductReducer';
import PDetailreducer from '../Reducers/PDetailreducer';
import CartReducer from '../Reducers/CartReducer';

export const store = configureStore(
  {
    reducer: {
      Auth: AuthSlice,
      products: ProductSlice,
      PDetails: PDetailreducer,
      Cart: CartReducer,
    },
  },
  compose(applyMiddleware(thunk))
);
