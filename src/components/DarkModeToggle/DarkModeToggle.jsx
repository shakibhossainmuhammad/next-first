'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="w-[42px] h-[24px] border-[1.5px] border-[#53c38b79] rounded-[30px] flex justify-between items-center p-[2px] relative cursor-pointer"
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔅</div>
      <div
        className="w-[15px] h-[15px] rounded-[50%] bg-[#53c28b] absolute"
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default DarkModeToggle;
