import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const [name, setName]=useState('')
  const { user, error, isLoading } = useUser();

  useEffect(()=>{
    user &&
      console.log(user)
  },[user])

  return (
    <div>
      <div className='my-5 py-2'>
        <div className='mb-2'><p className='text-xl'>Auth0 Sign In/ Logout</p></div>
        <div className='flex gap-3'>
          <div>
            <Link href={"/api/auth/login"}>
            <a className='cursor-pointer w-24 h-12 px-2 py-1 bg-white text-black border-2 border-black rounded-lg' >Log In</a>
            </Link>
            </div>
          <div>
            <Link href={"/api/auth/logout"}>
            <a className='cursor-pointer w-24 h-12 px-2 py-1 bg-black text-gray-300 border-2 border-gray-300 rounded-lg' >Log Out</a>
            </Link>
          </div>
        </div>
      </div>
      {
        isLoading &&
        <div>Loading ...</div>
      }
      {
      user  && 
        <div>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      }
    </div>
  )
}
