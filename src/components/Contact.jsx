
import React from 'react'
import { SectionWrapper } from '../hoc';
import './hero.css'
import SocialLinks from '../data/SocialLinks';
  
  const Contact = () => {
    return (
      




  
    <div className="bg-gradient-info pt-12 pb-12 mybg">
      <div className="container mx-auto">
        <div className="p-2">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:order-2 lg:w-4/12 ">
              <img
                src='src/assets/mypic.jpeg'
                
                alt=""
                className="rounded-full mx-auto mb-4 h-36 w-36 border-2 border-slate-950   "
              />
            </div>
            <div className="lg:w-8/12 lg:order-1">
              <h2 className="text-white text-center font-bold text-4xl">Reach Out to me!</h2>
              <p className="text-white mt-3 text-center ">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </p>
              <p className="text-white mt-3 text-center font-bold text-2xl">Full Stack Developer</p>
              <div className="my-3 flex content-center justify-center  ">
                
                <span class="font-medium select-none text-gray-950 animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] "> Nagpur, INDIA</span>
                
              </div>
              <div className='flex justify-center content-center'><SocialLinks /></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



    
  
 


export default SectionWrapper(Contact,'contact') 