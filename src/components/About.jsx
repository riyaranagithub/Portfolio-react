function About() {
  return (
    <div id="About">
      <h1 className='text-center text-4xl text-blue-500 font-Poppins font-semibold pt-20'>About Me</h1>
      <div className='w-full h-auto md:h-screen flex flex-col md:flex-row justify-center items-center p-4'>
        <div className='w-full md:w-1/2 h-64 md:h-full bg-cover' style={{ backgroundImage: 'url("About.png")' }}></div>
        <div className='w-full md:w-1/2 h-auto flex justify-center items-center p-4'>
          <p className='text-lg md:text-2xl font-Poppins'>
            I am a 19-year-old aspiring MERN developer currently in my second year of a BCA course at Delhi Skill and Entrepreneurship University. Passionate about web development, I am dedicated to enhancing my skills and knowledge in the MERN stack to build innovative and efficient web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
