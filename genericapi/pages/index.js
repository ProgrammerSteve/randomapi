import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/Sidebar';
import ScreenComponent from '../components/screenComponent/ScreenComponent';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter()

  useEffect(()=>{
    if(isLoading===false){
      if(!user || error){
        router.push('/Signin')
      }
    }
  },[isLoading,user,error])




  return (
    <div className='bg-red-200 w-screen h-full flex'>
      <Sidebar/>
      <ScreenComponent>
        Hello
      </ScreenComponent>
    </div>
  )
}
