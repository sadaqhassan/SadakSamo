import React from 'react'

const About = () => {
  return (
     <div className='flex flex-col md:flex-row justify-center items-center px-4 gap-4 mt-40  w-full mx-auto overflow-x-hidden'>
        <img className='w-60 h-60 rounded-full' src="/img.png" alt="" />
        <div className='flex flex-col md:flex-row gap-4 mx-5'>
            <div className='flex flex-col gap-2'>
            <span className='font-bold text-2xl'>About me</span>
            <p className='font-light text-sm border-t'>I’m a Full-Stack Software Engineer specializing in the<br/> MERN stack (MongoDB, Express.js, React, Node.js).<br/> I build scalable, secure, and high-performance<br/> web applications with a strong focus on clean code, usability, and real-world problem solving.</p>  
        </div>
        <hr/>
        <div className='flex flex-col gap-2'>
            <span className='font-bold text-2xl'>What i do</span>
            <p className='font-light text-sm border-t'>Build modern, responsive web applications

Develop RESTful APIs and backend services<br/>

Design and optimize databases<br/>

Implement authentication & authorization systems<br/>

Collaborate, debug, and continuously improve systems<br/></p>  
        </div>
        </div>
    </div>
   
  )
}

export default About