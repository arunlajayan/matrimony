import React from 'react'
import logo from '@/public/image/icon/keralamatrimony-logo.png'
import Image from 'next/image'
import ButtonLogin from './button.login'

export default function Navbar() {
  return (
    <div className=' shadow-xl navbar flex  bg-white-900 "'>
    <div className="flex-1 logotop  py-2 flex-0">
        <div className='logotxt'>
            From Matrimony.com Group
        </div>

        <Image src={logo} width={120} height={100} alt="logo" />
    </div>
    <div className="flex pt-8 pr-16">
        {/* <div className="text-black-700  font-semibold pl-10 text-sm  tracking-wide">
            Already a member?

        </div>
        <div >
            <ButtonLogin />
        </div> */}
        <div className='helptext-header'> 
        Help
    </div>
    </div>
    
</div>
  )
}
