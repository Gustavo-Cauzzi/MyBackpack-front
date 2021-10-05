import React from 'react';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen w-full h-full bg-theme-lightBeauBlue">
      {children}
    </div>
  );
};

export default DefaultLayout;
