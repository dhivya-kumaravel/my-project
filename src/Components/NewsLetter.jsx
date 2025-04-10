import React from 'react'
import{FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const NewsLetter = () => {
  return (
    <div className='mt-20'>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/> Email me for jobs</h3>
                <p className='text-primary/75 text-base mb-4'>By using your Email, You can subscribe to get more jobs.</p>
                <div className='w-full space-y-4'>
                  <input type="email" name="email" id="email" placeholder="name@mail.com" 
                  className ='w-full block py-2 pl-3 border focus:outline-none'/>
                  <input type="submit" value={"Subscribe"} className='w-full block 
                  py-2 pl-3 border focus:outline-none bg-blue-600 text-white 
                  cursor-pointer rounded-sm font-semibold'/>
                </div>
        </div>
        {/* second part */}
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/> Get Noticed Faster</h3>
                <p className='text-primary/75 text-base mb-4'>Just share your resume here to attract the recruiters...</p>
                <div className='w-full space-y-4'>
                <input type="submit" value={"Upload your Resume"} className='w-full block 
                  py-2 pl-3 border focus:outline-none bg-blue-600 text-white 
                  cursor-pointer rounded-sm font-semibold'/>
                </div>
        </div>
    </div>
  )
}

export default NewsLetter