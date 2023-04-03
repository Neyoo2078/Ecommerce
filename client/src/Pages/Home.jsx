import React from 'react';
import { Feature } from '../Components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchPoducts } from '../ReduxMiddleware/ProductActions';
import ImageSlider from '../Components/Slider';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const caterories = [
  { name: 'Supermarket', icon: faShoppingCart },
  { name: ' Beauty', icon: faShoppingCart },
  { name: 'Home & Office', icon: faShoppingCart },
  { name: 'Phone & Tablets', icon: faShoppingCart },
  { name: 'Computing', icon: faShoppingCart },
  { name: 'Electronics', icon: faShoppingCart },
  { name: 'Fashion', icon: faShoppingCart },
  { name: 'Baby Products', icon: faShoppingCart },
  { name: 'Gaming', icon: faShoppingCart },
  { name: 'Sporting Goods', icon: faShoppingCart },
  { name: 'Automoile', icon: faShoppingCart },
];
const Home = ({ data, setdata }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoducts());
  }, []);
  return (
    <div className='w-full flex flex-col gap-2 '>
      <div className='flex justify-between w-[90%] mx-auto gap-2 my-[15px] '>
        <div className='flex flex-col gap-1 w-[25%] border-[2px] p-5'>
          {caterories.map((items, i) => (
            <div className='flex gap-2 justify-start items-center hover:text-[#f5ea57] '>
              <FontAwesomeIcon icon={items?.icon} />
              <NavLink>{items.name}</NavLink>
            </div>
          ))}
        </div>
        <ImageSlider />
        <div className='flex flex-col gap-1 w-[25%] border-[2px]'>
          <div className='w-full'>
            <img
              src='https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png'
              alt='img'
            />
          </div>
          <div className='w-full'>
            <img
              src='https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png'
              alt='img'
            />
          </div>
        </div>
      </div>
      <div>
        <Feature data={data} setdata={setdata} />
      </div>
    </div>
  );
};

export default Home;
