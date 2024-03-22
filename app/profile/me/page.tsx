'use client';

import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Me() {

   
    const [data, setData] = useState("nothing")

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data.email)
    }

  return (
    <div>
    <h1>Profile</h1>
          <h2>{data === "nothing" ? "Nothing" :  data }</h2>
    <button onClick={getUserDetails}>Details</button>

</div>
      
  )
}
