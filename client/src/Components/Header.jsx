import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const { Cart } = useSelector((state) => state.Cart);
  const navigate = useNavigate();
  console.log({ Cart });
  return (
    <div className='bg-[#4d4646] flex text-[#ffff] px-[20px] items-center justify-between'>
      <Link to='/'>
        <div>Hearder</div>
      </Link>
      <div
        className='relative p-1'
        onClick={() => {
          navigate('/cart');
        }}
      >
        <AiOutlineShoppingCart
          size={35}
          style={{ marginRight: '3px', marginTop: '5px' }}
        />
        <p className='absolute top-0 right-0 mb-3 font-semibold text-[#fab0b0]'>
          {Cart.reduce((a, c) => a + c.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Header;
