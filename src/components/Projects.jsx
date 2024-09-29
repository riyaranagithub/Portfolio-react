import React from 'react';
import { mainprojects,moreprojects,Maincard,Morecard } from './index';

function Projects() {
  return (
    <div id='Projects'>
      <h2 className='pt-20 text-center text-4xl font-semibold text-blue-600'>Projects</h2>
      <div className='flex flex-wrap justify-center py-8'>
        {mainprojects.map((project,index)=>(
  <Maincard
  imageSrc={project.imageSrc}
  title={project.title}
  description={project.description}
  link={project.link}
  />
))}
      </div>


      <div className='flex flex-wrap justify-center py-8'>
        {moreprojects.map((project, index) => (
          <div key={index} className=' h-full '>
            <Morecard 
              title={project.title}
              subTitle={project.subtitle}
              link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
