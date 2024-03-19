import Link from 'next/link'
import React from 'react'

export default function ButtonLogin() {
  return (
    <div ><Link href="?modal=true"><button className='btn-login'>Login</button></Link></div>
  )
}
