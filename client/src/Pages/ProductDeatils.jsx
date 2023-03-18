import React from 'react';
import { useParams } from 'react-router-dom';
import { PDetails } from '../ReduxMiddleware/PDaction';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../Components/Rating';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';
import { Api } from '../Api/Api';
import { AddToCart } from '../Reducers/CartReducer';

const ProductDeatils = () => {
  const { value, PLoading } = useSelector((state) => state.PDetails);
  const { Cart } = useSelector((state) => state.Cart);

  console.log({ value, PLoading });
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(PDetails(id));
  }, [id, dispatch]);

  const AddCartHandler = async () => {
    const exist = Cart.find((p) => p.id === value[0].id);
    const quantity = exist ? exist.quantity + 1 : 1;
    const data = await Api.get(`/${value[0].id}`);
    if (data.countInStock < quantity) {
      window.alert('product of of Stock');
    }
    dispatch(AddToCart({ ...value[0], quantity }));
  };

  if (PLoading) {
    return (
      <div className='w-full pt-9 flex justify-center items-center'>
        <Loading message='Loading Product' />
      </div>
    );
  }
  return (
    <div className='w-full p-[20px]'>
      <div className='flex justify-between  w-full  '>
        <div className='w-[50%]  '>
          <img
            className='w-[80%] h-[600px] bg-contain m-auto'
            src={value[0]?.image}
            alt={value[0].name}
          />
        </div>
        <div className='w-[25%] flex flex-col text-[20px]'>
          <Helmet>
            <title>{value[0].name}</title>
          </Helmet>
          <h1 className='py-4  text-[35px]  border-b-2'>{value[0].name}</h1>
          <div className=' py-4  border-b-2'>
            <Rating rating={value[0].rating} numRating={value[0].numReviews} />
          </div>
          <div className='py-4   border-b-2'>
            <p>${value[0].price}</p>
          </div>
          <div className=' py-4  border-b-2'>
            <p>Description:{value[0].description}</p>
          </div>
        </div>
        <div className='w-[25%] flex flex-col mx-5'>
          <div className='border-[2px] w-[60%] p-[10px] mt-4'>
            <div className='flex  p-[10px]  border-b-2'>
              <p>Price:</p>
              <p className='m-auto'>${value[0].price}</p>
            </div>
            <div className='flex p-[10px]'>
              <p>Status:</p>
              {parseInt(value[0].countInStock) > 0 ? (
                <p className='m-auto py-[2px] px-1 text-white rounded-lg bg-[#04880f]'>
                  in Stock
                </p>
              ) : (
                <p className='m-auto py-[2px] px-1 text-white rounded-lg bg-[#df3c20]'>
                  Out Of Stock
                </p>
              )}
            </div>
            <div className='p-[10px] w-full flex justify-center'>
              {parseInt(value[0].countInStock) > 0 && (
                <button
                  disabled={value[0].quantity === value[0].countInStock}
                  onClick={AddCartHandler}
                  className='text-black border-black rounded-lg w-full border-[1px] bg-[#FFD700] py-[2px] px-1 m-auto'
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
