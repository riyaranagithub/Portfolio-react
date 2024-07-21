import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';

function Card({ title, subTitle, link }) {
  return (
    <div className='m-4 block max-w-sm overflow-hidden rounded-lg h-64 shadow-xl'>
      <div className='shadow-lg hover:bg-gradient-to-b from-blue-100 to-blue-50 h-full flex flex-col justify-between'>
        <div className='flex flex-col justify-between p-4 '>
          <h2 className='mb-3 text-2xl font-bold text-center'>{title}</h2>
          <p className='mb-4 text-sm font-medium text-center font-Poppins'>{subTitle}</p>
        </div>
        <div className='text-2xl flex justify-center mb-4'>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
