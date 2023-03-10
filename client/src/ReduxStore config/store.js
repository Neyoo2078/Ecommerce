import { configureStore, } from '@reduxjs/toolkit';
import { compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthSlice from "../Reducers/reducer"

 export const store = configureStore({
    reducer:{Auth:AuthSlice}
  },compose(applyMiddleware(thunk)))
  