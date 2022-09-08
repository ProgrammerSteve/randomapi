import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import {useRouter} from 'next/router';
import Sidebar from '../components/sidebar/Sidebar';
import SigninComponent from '../components/signinComponent/Signin';

  
export default function Signin() {
  const { user, error, isLoading } = useUser();
  const router = useRouter()
  useEffect(()=>{
      if(user){
        router.push('/')
      }
  },[isLoading,user,error])
  
  return (
    <div>
      <SigninComponent/>
    </div>
  );
}

