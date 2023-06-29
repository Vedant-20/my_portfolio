
import { github} from '../assets'
import {linkedin, gmail} from '../assets'
import '../components/hero.css'

const SocialLinks = () => {
  return (
    <div className="flex text-lg content-center space-x-6 sm:justify-start justify-center ">
      
      <div onClick={()=>window.open('https://github.com/Vedant-20','_blank')} className='mybg w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'>
                      <img src={github} alt='github' className=' object-contain'/>
      </div>
      <div onClick={()=>window.open(source_code_link,'_blank')} className='mybg w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'>
                      <img src={linkedin} alt='linkedin' className=' object-contain'/>
      </div>
      <div onClick={()=>window.open('mailto:warjurkarvedant@gmail.com','_blank')} className='mybg w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'>
                      <img src={gmail} alt='gmail' className=' object-contain'/>
      </div>
    </div>
  );
};

export default SocialLinks;
