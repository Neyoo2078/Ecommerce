import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Cart: [
    {
      id: 1,
      name: 'Light pinl Shirt',
      title: 'Nike T-shirt',
      category: 'Clothing',
      image: '/images/img.jpg',
      countInStock: '4',
      price: 35,
      brand: 'Nike',
      rating: '4.5',
      numReviews: 10,
      description: 'original T-shirt',
      quantity: 1,
    },
  ],
};

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    AddToCart(state, action) {
      const newitems = action.payload;
      const exist = state.Cart.find((item) => item.id === newitems.id);
      const update = exist
        ? state.Cart.map((item) => (item.id === exist.id ? newitems : item))
        : [...state.Cart, action.payload];
      state.Cart = update;
    },
    RemoveFromCart(state, action) {
      state.Cart = state.Cart.filter((items) => items.id !== action.payload);
    },
  },
});

export const { AddToCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;
