import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div id="Home" className='w-full h-screen bg-blue-100 flex justify-center items-center flex-col p-4'>
      <p className='text-3xl md:text-5xl font-Poppins font-bold mb-4 text-center'>Hello, I'm Riya Rana</p>
      <TypeAnimation
        sequence={[
          "A Frontend Developer",
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        className='text-[#7091E6] font-bold text-center'
      />
    </div>
  );
}

export default Home;
