import React from 'react';
// images
import Image from '../assets/avatar.svg'
// icons
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa'
// animation

import {TypeAnimation} from 'react-type-animation'
// motion
import {motion} from 'framer-motion'
// variant
import {fadeIn} from '../variants'

const Banner = () => {
  return <div className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className="container mx-auto">
              <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
                {/* text */}
                <div className="flex-1 text-center font-secondary lg:text-left">
                  <motion.h1 variants={fadeIn('up',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[80px]">Luthando <span className="">Didiza</span></motion.h1>
                  <motion.div variants={fadeIn('up',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                    <span className="mr-4">I am A</span>
                    <TypeAnimation sequence={[
                      'Frontend Developer',2000,'Javascript Developer',20000,'UI Developer',2000,
                    ]} speed={50} className='text-sky-800  text-[36px] lg:text-[60px]' wrapper='span' repeat={Infinity} />


                  </motion.div>
                    <motion.p variants={fadeIn('up',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas sint. Veritatis ab accusamus vero, at sit pariatur tempora rerum consequatur repellendus ut, harum voluptatem eos velit officia laboriosam totam. Culpa blanditiis in perspiciatis dicta.</motion.p>
                    <motion.div variants={fadeIn('up',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className="btn-container flex gap-8 my-7">
                      <button className="bg-teal-400 font-semibold tracking-[4px] px-8 py-4 text-xl rounded-full shadow-lg shadow-sky-500">
                      Contact Me
                      </button>
                      <button className="">
                      My Portfolio
                      </button>
                    </motion.div>
                </div>
                {/* Image */}
                <motion.div variants={fadeIn('down',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
                  <img src={Image} alt="profile-img" />
                </motion.div>

              </div>
            </div>
  </div>;
};

export default Banner;
