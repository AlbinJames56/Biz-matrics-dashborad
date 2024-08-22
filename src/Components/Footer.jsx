import React from 'react'

function Footer() {
  return (
    <>
    <div className="flex justify-between text-gray-500 pt-5">
      <div >
      <p> COPYRIGHT © 2024, Made with React and Tailwind CSS.</p>
    </div>
    <div className='flex gap-4 mr-5 decoration:none'>
      <a href='#' className='no-underline text-gray-500'>About Us</a>
      <a href="#" className='no-underline text-gray-500'>Blog</a>
      <a href="#" className='no-underline text-gray-500'>License</a>
    </div>
    </div>
    
    </>
  )
}

export default Footer