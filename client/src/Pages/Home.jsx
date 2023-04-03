import React from 'react';
import { Feature } from '../Components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchPoducts } from '../ReduxMiddleware/ProductActions';
import ImageSlider from '../Components/Slider';

const Home = ({ data, setdata }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoducts());
  }, []);
  return (
    <div className='w-full flex flex-col gap-2 '>
      <div>
        <ImageSlider />
      </div>
      <div>
        <Feature data={data} setdata={setdata} />
      </div>
    </div>
  );
};

export default Home;
