import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const[user, setUser]=useState(null);

  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between py-4'>
    <Link to='/'>
        <img src={assets.logo} className='w-28 sm:w-32 lg:w-40 pt-4 cursor-pointer'/>
        </Link>

        <div>
        {user ? 
          <div></div> :  
          <div className='flex items-center gap-2 sm:gap-5'>

            <p onClick={()=> navigate('/buy')} className='cursor-pointer'>pricing</p>
            <button className='bg-zinc-800 cursor-pointer text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
          </div>
          }
        
         
        </div>

    </div>
  )
}

export default Navbar