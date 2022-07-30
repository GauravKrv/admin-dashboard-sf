import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import {ImLinkedin,ImGithub} from 'react-icons/im'
import {IoCall} from 'react-icons/io5'
const Portfolio = () => {
  const { currentColor, screenSize } = useStateContext();

  return (
    <div className=" flex flex-col justify-between p-2 md:ml-6 md:mr-6 relative" style={{ background: 'white'}}>
    {/* //!The navbar */}
    <div className='flex justify-between'> 
    
    <div className='font-semibold text-3xl tracking-tighter'><span className=' text-gray-500'>GAURAV</span ><span className=''>KRV</span> </div>
    <div className='flex text-gray-800 font-medium py-2 pl-3'>
        <div className='px-2'>About</div>
        <div className='px-2'>Skills</div>
        <div className='px-2'>Projects</div>
         </div>
         <div className='flex flex-row text-gray-800 font-medium py-2 '>
            <div className='flex px-1'><ImLinkedin className='mt-1'/><a href='https://linkedin.com/in/gauravkrv' className='px-2 '>LinkedIn</a></div>
        
            <div className='flex px-1'><ImGithub className='mt-1'/><a href='https://github.com/gauravkrv' className='px-2 '>Github</a></div>
        
            <div className='flex px-1'><IoCall className='mt-1'/><a href='mailto:gauravkrvbzi@gmail.com?subject=Looking%Forward?body=Hi%there' className='px-2 '>Contact</a></div>
        
         </div>
   {/* //TODO: MAKE ABOVE Navbar RESPONSIVEs */}

    </div>
     </div>
  )
}

export default Portfolio