import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io5'
import { IoLogoHtml5 } from 'react-icons/io5'
import { IoLogoCss3 } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { animate, motion } from 'framer-motion'

function Skills() {
  const iconVariants=(duration)=>({
     initial:{y:-10},
     animate:{
      y:[10,-10],
      transition:{
        duration: duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"

      }
     }
  })
  return (
    <div className='pt-10 w-full h-screen bg-blue-100'>
      <h1 className='text-center text-4xl text-blue-500 font-semibold mt-20 mb-20'>Skills</h1>
      <div className=' flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-2'>
          <IoLogoHtml5 className='text-6xl text-orange-400'/>
        </motion.div>
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-2'>
          <IoLogoCss3 className='text-6xl text-blue-500'/>
        </motion.div>
        <motion.div
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-2'>
          <IoLogoJavascript className='text-6xl text-yellow-400'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-2'>
          <RiReactjsLine className='text-6xl text-cyan-400'/>
        </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-2'>
          <RiTailwindCssFill className='text-6xl text-cyan-500'/>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills