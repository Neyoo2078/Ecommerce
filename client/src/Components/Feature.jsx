import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Rating from './Rating';

const Feauture = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(products);
  }, [products]);

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-[85%] flex flex-col p-3'>
        <h1 className='text-[40px]'>Feature Product</h1>
        {isLoading ? (
          <div className='m-auto'>Loading products</div>
        ) : (
          <div className='flex justify-between items-center gap-1 flex-wrap'>
            {data.map((product) => {
              return (
                <div key={product.id}>
                  <div className='w-[200px]  flex flex-col border-[1px] border-[#00000] '>
                    <Link to={`/productDetails/${product.id}`}>
                      <img
                        className='w-full h-[280px] '
                        src={product.image}
                        alt='Prouct'
                      />
                    </Link>
                    <p className='p-3'>{product.name}</p>
                    <Rating
                      rating={product.rating}
                      numRating={product.numReviews}
                    />
                    <p className='p-3 font-bold'>{product.price}</p>
                    <button className='p-2 outline-none bg-[#A5A085] hover:bg-[#ddb8a6] w-[50%]  rounded-sm'>
                      Add to Cart
                    </button>
                  </div>
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
