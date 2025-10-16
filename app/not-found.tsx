import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const notFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black text-center px-4 sm:px-6'>
        <h1 className=' text-[8rem] sm:text-[10rem] md:text-[12rem] font-extrabold text-red-500 leading-none'>
            404
        </h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white'>
            Oops ! Page not found
        </h2>
        <p className='text-gray-400 mt-3 max-w-md text-sm sm:text-base md:text-lg'>
            The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href={'/'}>
        <Button 
            
            className='mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white rounded-2xl shadown-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 cursor-pointer'>
                Return Home
        </Button>
        </Link>
    </div>
  )
}

export default notFound; 