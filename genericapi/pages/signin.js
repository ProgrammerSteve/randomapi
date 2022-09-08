import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Signin() {
  const [name, setName]=useState('')
  const { user, error, isLoading } = useUser();

  useEffect(()=>{
    user &&
      console.log(user)
  },[user])

  return (
    <div>

    </div>
  )
}
