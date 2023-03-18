import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Loading from './Loading';
import ProductCard from './ProductCard';

const Feauture = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(products);
  }, [products]);

  const [Alert, setAlert] = useState(false);

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
        {isLoading ? (
          <Loading message='Loading products' />
        ) : (
          <div className='flex justify-between items-center gap-1 flex-wrap'>
            {data.map((product) => {
              return (
                <div key={product.id}>
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
