import React from 'react';
import { Feature } from '../Components';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchPoducts } from '../ReduxMiddleware/ProductActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPoducts());
  }, []);
  return (
    <div>
      <div>
        <Feature />
      </div>
    </div>
  );
};

export default Home;
