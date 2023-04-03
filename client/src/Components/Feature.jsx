import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Loading from './Loading';
import ProductCard from './ProductCard';

const Feauture = ({ data, setdata }) => {
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    setdata(products);
  }, [products, setdata]);

  const [Alert, setAlert] = useState(false);
  const SelectHandler = () => {};

  if (data.length === 0 && !isLoading) {
    return (
      <div className='w-full  flex justify-center items-center flex-col'>
        <p className='mt-[80px] font-semibold'>No Product Is Available</p>
      </div>
    );
  }

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-[85%] flex flex-col p-3'>
        <div className='h-[50px] p-2 m-auto'>
          {Alert && (
            <h1 className='text-[20px] m-auto p-2 bg-[#48f631]'>
              item added to cart
            </h1>
          )}
        </div>

        <h1 className='text-[40px]'>Feature Product</h1>
        <div>
          <label htmlFor='Categories'> Categories: </label>
          <select
            className='text-black w-[100px]'
            name='Categories'
            id='Categories'
            onChange={SelectHandler}
          >
            <option value='All'>All</option>
            <option value='Clothing'>Clothing</option>
            <option value='FootWear'>Foot Wear</option>
            <option value='Cake'>Cake</option>
            <option value='Cake'>Cake</option>
          </select>
        </div>
        {isLoading ? (
          <Loading message='Loading products' />
        ) : (
          <div className='flex justify-start items-center gap-3 flex-wrap'>
            {data.map((product) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} setAlert={setAlert} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feauture;
