
'use client';

import { logoutApi } from '@/actions/api/dataget';
import axios from 'axios';
import { redirect, useRouter } from "next/navigation";

import React from 'react'

export default function Logout() {
    const router = useRouter()
    const logoutHandler = async () => {
        try {
            const data: any = await logoutApi().then((res) => {
                if (res.success == true) {
                    router.push('/')
                }
            })
            // router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            
        }

    }

    return (
       
              <div ><button type="submit" className='btn-logout' onClick={()=> logoutHandler()} >Logout</button></div>
      
  )
}
