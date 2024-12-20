import React from 'react'
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function More({what, where}) {
  return (
    <div className='flex justify-center'>
      <Link to={where} className='lg:px-4 lg:py-2 py-1 px-2 bg-red-500 hover:bg-red-400 rounded-md text-white flex items-center lg:text-base text-sm'>
        <h1>See more {what} </h1>
        <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6  pl-1" />
      </Link>
    </div>
  )
}
