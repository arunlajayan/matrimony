'use client';

import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Me() {

   
  const [data, setData] = useState("nothing")
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      setData(res.data.data.email)
    }
    getUserDetails()
  },[])
   

  return (
    <div>
    <h1>Profile</h1>
          <h2>{data === "nothing" ? "Nothing" :  data }</h2>
    {/* <button onClick={getUserDetails}>Details</button> */}

</div>
      
  )
}
