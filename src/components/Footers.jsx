import React from 'react';
import { motion } from 'framer-motion';


  const footerAnimation = {
    hidden: {
      y: 100,
    },

    show: {
      y: 0,
      transition: {
     
          delay: 3.9,
          duration: 0.5,
        
      },
    },
  };


const Footers = () => {
    return (
      <motion.footer className="flex justify-center" variants={footerAnimation} initial="hidden" animate='show' >
        <ul className="w-[300px] flex justify-between items-center">
          <li>
            <a href="#" className="text-sm font-semibold">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Snapchat
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Dribble
            </a>
          </li>
        </ul>
      </motion.footer>
    );
}
 
export default Footers;