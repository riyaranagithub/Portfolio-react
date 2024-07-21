import React from 'react';
import { PROJECTS } from './components/PROJECTS';
import Card from './components/Card';

function Projects() {
  return (
    <div id='projects'>
      <h2 className='mt-20 text-center text-4xl font-semibold text-blue-600'>Projects</h2>
      <div className='flex flex-wrap justify-center py-8'>
        {PROJECTS.map((project, index) => (
          <div key={index} className=' h-full '>
            <Card 
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
