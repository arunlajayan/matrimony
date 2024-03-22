'use client'
import { getUser } from '@/actions/api/dataget'
import React, { useEffect, useState } from 'react'

interface userResponse{
  message: string,
  status: boolean,
  users:string[]
}

export default function Profile() {
const [user, setUser] = useState<any>(null)
useEffect(() => {
  async function fetchData() {
      try {
          const data: any = await getUser();
          setUser(data?.users);
          console.log(data);
      } catch (error) {
          console.error('Error fetching user data:', error);
      }
  }

  fetchData();
}, []);
    
  return (
      
<div className="flex items-center gap-4">
<div className="font-medium dark:text-black">
{user && user.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {user.map((item:any, id:any) => (
              <div className="shadow-lg m-4 p-3" key={id}>
                <div className='text-black'>{item.username}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{item.email}</div>
            </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our users are gone...</p>
        )}
    </div>
</div>

  )
}
