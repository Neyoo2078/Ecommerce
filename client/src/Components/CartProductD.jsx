import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Api } from '../Api/Api';
import { AddToCart, RemoveFromCart } from '../Reducers/CartReducer';

const CartProductD = ({ items }) => {
  const dispatch = useDispatch();
  const { Cart } = useSelector((state) => state.Cart);

  const AddCartHandler = async () => {
    const exist = Cart.find((p) => p.id === items.id);
    const quantity = exist ? exist.quantity + 1 : 1;
    const data = await Api.get(`/${items.id}`);
    if (data.countInStock < quantity) {
      window.alert('product of of Stock');
    }
    dispatch(AddToCart({ ...items, quantity }));
  };

  const RemoveCartHandler = async () => {
    const exist = Cart.find((p) => p.id === items.id);
    const quantity = exist ? exist.quantity - 1 : 1;
    const data = await Api.get(`/${items.id}`);
    if (data.countInStock < quantity) {
      window.alert('product of of Stock');
    }
    dispatch(AddToCart({ ...items, quantity }));
  };

  const DeleteItem = () => {
    dispatch(RemoveFromCart(items.id));
  };

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='p-1 flex   h-[155px] my-auto w-[50%] '>
        <img
          className=' w-[115px] h-[145px] mr-3 '
          src={items.image}
          alt={items.name}
        />
        <Link
          to={`/productDetails/${items.id} `}
          className='m-auto cursor-pointer'
        >
          <p className='text-[#4954f8]'>{items.name}</p>
        </Link>
      </div>
      <div className='flex  w-[17%] '>
        <button
          onClick={RemoveCartHandler}
          disabled={items.quantity === 1}
          className={`justify-center w-[35px] h-[35px] bg-slate-400  `}
        >
          -
        </button>

        <p className='m-auto '>{items.quantity}</p>
        <button
          onClick={AddCartHandler}
          disabled={items.quantity === items.countInStock}
          className='justify-center w-[35px] h-[35px] bg-slate-400 '
        >
          +
        </button>
      </div>
      <div className='w-[10%]'>
        <p>${items.price}</p>
      </div>
      <div className='w-[10%]' onClick={DeleteItem}>
        <AiFillDelete size={20} />
      </div>
    </div>
  );
};

export default CartProductD;
