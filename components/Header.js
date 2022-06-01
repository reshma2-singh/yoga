import React from 'react'
import Image from "next/image";
import {useRouter} from 'next/router'
function Header() {
    const router = useRouter();
    return (
        <header  className="shadow-sm border-b bg-pink sticky top-0 z-1000 ">
        <div className="flex justify-between p-2 max-w-6xl mx-5cxl:mx-auto">
            <div className='p-2'>
                <Image
                src="/7.png" width="40" height="40"  ml="10"
                
                />
            </div>
                
                     <div className="  bg-pink   flex flex-row ">
            
            <h1 onClick={() => router.push('/')} className="nav-margin mt-8 ml-10 text-gray-300 text-xl text-center font-semibold hover:text-white cursor-pointer">Home</h1>
          
                    <h1 onClick={() => router.push('intro')} className="mt-8 ml-10 text-gray-300 text-xl text-center font-semibold hover:text-white cursor-pointer" >About me</h1>
                    <h1 onClick={() => router.push('about')} className="mt-8 ml-10 text-gray-300 text-xl text-center font-semibold hover:text-white cursor-pointer" >About yoga</h1>
                    <h1 onClick={() => router.push('ancient')} className="mt-8 ml-10 text-gray-300 text-xl text-center font-semibold hover:text-white cursor-pointer" >Ancient yoga</h1>
                    <h1 onClick={() => router.push('contact')} className="mt-8 ml-10 text-gray-300 text-xl text-center font-semibold hover:text-white cursor-pointer" >Contact me</h1>
                    </div>
                
            </div>
             
            </header>
            
        

    )
}

export default Header
