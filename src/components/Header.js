import React from 'react';
// images
import Logo from '../assets/logo-no-background.png'



const Header = () => {
  return <header  className='py-8'>
            <div className="container mx-aut">
              <div className=" flex justify-between items-center">
                {/* logo */}
                <a href="">
                  <img src={Logo} alt="logo" className='w-28 ' />
                </a>
                {/* button */}


                <button className="btn btn-sm font-light text-xl">Work With Me</button>
              </div>
            </div>
    
        </header>;
};

export default Header;
