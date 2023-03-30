import React from 'react';
// icons
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
// services


const services =[
  {
    name:'UI/UX Design',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link:'Learn More'
  },
  {
    name:'Front-end Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link:'Learn More'
  },
  {
    name:'Back-end Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link:'Learn More'
  },
  {
    name:'JavaScript Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link:'Learn More'
  },
]



const Services = () => {
  return <div className='section' id='services'>
          <div className="container mx-auto">
            <div>
              {/* TEXT */}
              <div>
                <h2 className="h2 text-accent mb-6">What I Do.</h2>
                <h3>{' '}I'm a Freelancce Front-end developer with over 3 years of experience.</h3>
              </div>
              {/* services */}
              <div>services</div>
            </div>
          </div>
  </div>;
};

export default Services;
