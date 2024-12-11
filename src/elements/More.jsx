import React from 'react'
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function More({what, where}) {
  return (
    <div className='flex justify-center'>
      <Link to={where} className='px-4 py-2 bg-red-500 hover:bg-red-400 rounded-md text-white flex'>
        <h1>See more {what} </h1>
        <ArrowRightIcon className="w-6 h-6 pl-1" />
      </Link>
    </div>
  )
}
