import React from 'react'
import aboutImg from '../assets/About2.png';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> 🪁About
         <span className='text-neutral-500'> Me.☀️
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium '>
                        Hello! I’m an award winning, passionate 4+ Years expericend Java developer, holding Post Graduate Degree in Master Of Computer Application (MCA) from Government College of Engineering in Aurangabad, Maharashtra. My experience has equipped me with a solid foundation in both theoretical and practical aspects of computer science.
                        <br></br>
                        <br></br>
                        Proficient in Java with hands-on experience in API development using Spring Boot and other frameworks. Skilled in industry skills like Redis, Kafka, GIT, Maven. Familiar with HTML/CSS for frontend development and proficient in SQL and DB2,PostgreSql for database management. Additionally, often practice coding questions on various platforms and a adept problem solver.
                        <br></br>
                        <br></br>
                        I have gained hands-on experience through my role as Senior Software Engineer at Godigit General Insurance, where I worked on project for API and microservices for Motor insurance for leading insureTech company in India.I actively participate in coding challenges on platforms like LeetCode and HackerRank.
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  