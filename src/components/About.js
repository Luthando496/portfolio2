import React from 'react';
// count up
import CountUp from'react-countup';
// intersection observer 
import {useInView} from'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant 
import {fadeIn} from '../variants'



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  return(
          <section className="section" id='about' ref={ref}>
            <div className="container mx-auto">
              <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen  ">
                {/* img */}
                <motion.div variants={fadeIn('right',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}  className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
                {/* TEXT */}
                <motion.div variants={fadeIn('left',0.1)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}  className="flex-1">
                  <h2 className="h2 text-accent">About Me.</h2>
                  <h3 className="h3 mb-4">I'm a Freelancce Front-end developer with over 3 years of experience.</h3>
                  <p className="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque expedita fugit optio amet esse ipsam unde odio cum labore et omnis perferendis beatae inventore a hic, quaerat libero?</p>
                  {/* stats */}
                  <div className="flex gap-x-6 lg:gap-x-10">
                    <div className="">
                      <div className="text-[40px] font-tertiary text-gradient mb-2">
                       {inView ?  <CountUp start={0} end={3} duration={2} delay={0}  /> : null }
                      </div>
                      <div className="font-primary text-sm tracking-[2px] ">Years of <br /> Experience </div>
                    </div>
                    <div className="">
                      <div className="text-[40px] font-tertiary text-gradient mb-2">
                       {inView ?  <CountUp start={0} end={24} duration={2} delay={0}  /> : null }
                       k+
                      </div>
                      <div className="font-primary text-sm tracking-[2px] ">Projects <br /> Completed </div>
                    </div>
                    <div className="">
                      <div className="text-[40px] font-tertiary text-gradient mb-2">
                       {inView ?  <CountUp start={0} end={14} duration={2} delay={0}  /> : null }
                       k+
                      </div>
                      <div className="font-primary text-sm tracking-[2px] ">Satisfied <br /> Clients </div>
                    </div>
                  </div>

                  <div className='flex  gap-x-8 items-center mt-5'>
                    <button className="btn btn-lg">Contact Me</button>
                    <a href="" className='text-gradient btn-link'>My Portfolio</a>
                  </div>
                </motion.div>
              </div>
            </div>
            
          </section>
        )
};

export default About;
