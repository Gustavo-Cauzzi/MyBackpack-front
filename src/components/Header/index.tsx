import React from 'react';
import logo from '../../assets/svg/backpack.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-theme-darkBeauBlue fixed z-10 top-0 left-0 right-0 py-4 px-4 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <img
          src={logo}
          alt="my backpack logo"
          className="w-10 h-10"
        />
        <h1 className="inline text-2xl text-bold text-white">
          My{' '}
          <span className="inline text-2xl">backpack</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
