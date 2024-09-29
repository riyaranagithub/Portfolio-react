import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoPerson } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);
  
  // State to manage form input values
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send email and clear form on success
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_91ycudo', 'template_3ys20ej', form.current, 'jQYh_hiMs7hXvlPMc')
      .then(
        () => {
          alert('Mail is successfully sent');
          console.log('SUCCESS!');
          // Clear form fields
          setFormData({
            from_name: '',
            from_email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div id='Contact'>
      <h1 className='text-center text-4xl font-Poppins font-semibold text-blue-500 pt-20'>
        Contact Me
      </h1>
      <div className='relative w-full h-auto md:h-screen flex md:flex-row justify-center items-center p-4'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='w-3/5 md:w-2/5 flex flex-col gap-5 p-4 absolute z-1 top-5'
        >
          <div className='relative'>
            <IoPerson className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            <input
              type='text'
              name='from_name'
              value={formData.from_name}
              onChange={handleChange}
              placeholder='Name'
              className='bg-blue-100 rounded-xl outline-none p-3 pl-10 w-full'
              required
            />
          </div>
          <div className='relative'>
            <MdEmail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            <input
              type='email'
              name='from_email'
              value={formData.from_email}
              onChange={handleChange}
              placeholder='Email'
              className='bg-blue-100 rounded-xl outline-none p-3 pl-10 w-full'
              required
            />
          </div>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            className='bg-blue-100 rounded-xl outline-none p-3 w-full'
            required
          />
          <button
            type='submit'
            className={`bg-blue-400 rounded-xl p-3 text-xl text-white cursor-pointer ${
              isClicked ? 'text-3xl' : 'text-xl'
            }`}
            onClick={handleClick}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
