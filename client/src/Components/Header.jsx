import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import DropMenu from './DropMenu';
import FilterSearch from './FilterSearch';
const Header = ({ setdata, data }) => {
  const { Cart } = useSelector((state) => state.Cart);
  const { User } = useSelector((state) => state.Auth);
  const navigate = useNavigate();
  console.log({ Cart });
  return (
    <div className='bg-[#4d4646] flex text-[#ffff] px-[20px] h-[70px]  items-center justify-between'>
      <Link to='/'>
        <div>Hearder</div>
      </Link>
      <FilterSearch setdata={setdata} data={data} />
      <div className='flex gap-3 items-center overflow-visible justify-between  h-full w-[300px]'>
        <DropMenu User={User} />
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
    </div>
  );
};

export default Header;
