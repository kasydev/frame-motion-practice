import React from 'react';
import { motion } from 'framer-motion';

const Navbars = () => {

  const navbarAnimation = {

    hidden:{
      y: -100,
     
    },

    show: {
      y:0,
      transition:{
        
          delay: 3.9,
          duration: 0.5,
      
      }
    }

  }
    return (
      <motion.nav className="flex justify-between item-center pt-4 relative x-50" variants={navbarAnimation} initial="hidden" animate="show">
        <div className='cursor-pointer'>
          <h1 className="cursor-pointer font-bold text-xl ">Art-life</h1>
        </div>

        <ul className="w-[250px] flex justify-between items-center">
          <li>
            <a href="#" className=" cursor-pointer text-sm font-semibold">
              Art
            </a>
          </li>
          <li>
            <a href="#" className=" cursor-pointer text-sm font-semibold">
              Painting
            </a>
          </li>
          <li>
            <a href="#" className=" cursor-pointer text-sm font-semibold">
              Discover
            </a>
          </li>
        </ul>
        <div>
            <a href='#' className='text-sm font- cursor-pointer'>Contact</a>
        </div>
      </motion.nav>
    );
}
 
export default Navbars;