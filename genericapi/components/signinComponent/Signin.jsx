import Link from 'next/link';
import { IconSocial} from '@tabler/icons';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function SigninComponent() {
  return (
    <div>
      <div className='mx-auto mt-20 py-8 max-w-md border-2 bg-stone-400 rounded-lg border-black shadow-lg grid place-content-center'>
        <IconSocial className="mx-auto h-16 w-16"/>
        <div className='mb-2 py-3 w-full text-center'><p className='text-2xl font-bold text-gray-200'>Generic Social Media Site</p></div>
        <div className='flex flex-col items-center w-full gap-3'>
          <div className='w-3/4 h-12 px-2 py-1 bg-slate-700 text-white font-bold border-2 border-white rounded-lg grid place-content-center text-center cursor-pointer'>
            <Link href={"/api/auth/login"}><a>Log In</a></Link>
          </div>
          <div className='w-1/2 h-12 px-2 py-1 bg-black border-2 border-white text-white font-bold rounded-lg grid place-content-center text-center cursor-pointer'>
            <Link href={"#"}><a>Guest</a></Link>
          </div>          
        </div>
      </div>
    </div>
  )
}



// {
//   isLoading &&
//   <div>Loading ...</div>
// }
// {
// user  && 
//   <div>
//     <h2>Name: {user.name}</h2>
//     <p>Email: {user.email}</p>
//   </div>
// }