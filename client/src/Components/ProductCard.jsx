import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { AddToCart } from '../Reducers/CartReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Api } from '../Api/Api';

const ProductCard = ({ product, setAlert }) => {
  const dispatch = useDispatch();
  const { Cart } = useSelector((state) => state.Cart);

  const Alert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const AddCartHandler = async () => {
    const exist = Cart.find((p) => p.id === product.id);
    const quantity = exist ? exist.quantity + 1 : 1;
    const data = await Api.get(`/${product.id}`);
    if (data.countInStock < quantity) {
      window.alert('product of of Stock');
    }
    dispatch(AddToCart({ ...product, quantity }));
    Alert();
  };

  return (
    <div>
      <div className='w-[200px]  flex flex-col border-[1px] border-[#00000] '>
        <Link to={`/productDetails/${product.id}`}>
          <img className='w-full h-[280px] ' src={product.image} alt='Prouct' />
        </Link>
        <p className='p-3'>{product.name}</p>
        <Rating rating={product.rating} numRating={product.numReviews} />
        <p className='p-3 font-bold'>${product.price}</p>
        <button
          disabled={product.quantity === product.countInStock}
          onClick={AddCartHandler}
          className='p-2 outline-none bg-[#A5A085] hover:bg-[#ddb8a6] w-[50%]  rounded-sm'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
