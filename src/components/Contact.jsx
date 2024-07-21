import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoPerson } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_91ycudo', 'template_3ys20ej', form.current, {
        publicKey: 'jQYh_hiMs7hXvlPMc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <h1 className='text-center text-4xl font-Poppins font-semibold text-blue-500 mt-20'>Contact Me</h1>
      <div className='w-full h-auto md:h-screen flex flex-col md:flex-row justify-center items-center p-4'>
        <div className='w-full md:w-1/2 h-64 md:h-full bg-cover' style={{ backgroundImage: 'url("./src/image.gif")' }}></div>
        <form ref={form} onSubmit={sendEmail} className='w-full md:w-2/5 flex flex-col gap-5 p-4'>
          <div className='relative'>
            <IoPerson className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            <input 
              type="text" 
              name="from_name" 
              placeholder='Name' 
              className='bg-blue-100 rounded-xl outline-none p-3 pl-10 w-full'
            />
          </div>
          <div className='relative'>
            <MdEmail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            <input 
              type="email" 
              name="from_email" 
              placeholder='Email' 
              className='bg-blue-100 rounded-xl outline-none p-3 pl-10 w-full'
            />
          </div>
          <textarea 
            name="message" 
            placeholder='Message' 
            className='bg-blue-100 rounded-xl outline-none p-3 w-full'
          />
          <button
            type="submit" 
            className={`bg-blue-400 rounded-xl p-3 text-xl text-white cursor-pointer ${isClicked ? 'text-3xl' : 'text-xl'}`}
            onClick={handleClick}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
