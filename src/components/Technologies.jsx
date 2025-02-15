import React from 'react';
import { FaAws,FaGit,FaJava,FaJenkins } from "react-icons/fa";
import { TbFileTypeSql,TbBrandBitbucket,TbBrandMysql } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpring,SiSpringboot, SiApachekafka,SiRedis,SiDocker,SiApachemaven,SiJira} from "react-icons/si";


import { motion } from "framer-motion"

const iconMove= (duration) => ({
    initial: {y:-10},
    animate : {
        y: [10,-10],
        transition : {
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className='my-20 text-center text-4xl'>✨Technologies.🪁</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpring className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Spring
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Spring Boot
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDocker className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Docker
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandBitbucket className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    BitBucket
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGit className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Git
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <TbFileTypeSql className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    SQL
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandMysql className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    MySql
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    AWS
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiApachemaven className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Maven
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiApachekafka className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Kafka
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedis className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Redis
                </span>
            </motion.div>
			<motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJira className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    JIRA
                </span>
            </motion.div>
			 <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJenkins className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Jenkins
                </span>
            </motion.div>
		</motion.div>
    </div>
  );
}

export default Technologies;
