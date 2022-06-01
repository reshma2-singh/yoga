import React from 'react'
import Image from "next/image";
import Features from './Features';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react' 
import {useRouter} from 'next/router'  
function Footer() {
  const router = useRouter();
  useEffect(()=>{
    AOS.init({duration:2000});
},[])
    return(
      <div>
        <div className="flex">
      <div className="imm ">
           <Image
      
        src="/79.jpg"
       width={650}
       height={600}
       
      />
      </div>
      <div className="imm ">
           <Image
      
        src="/79.jpg"
       width={650}
       height={600}
       
      />
      </div>
      </div>
      <div>

          <div className="left" data-aos="fade-right">
          <Image    src="/7.png" width="500" height="300"  />
          </div>
          <div className="bg-white">
          <h1 className="ri text-5xl font-bold text-white " data-aos="fade-left">Get in shape.<br/>Start your yoga journey<br/> with <br/> me today</h1></div>
            <button onClick={() => router.push('contact')} className="right  w-96  py-2 h-10 mt-10 px-5 rounded-xl" data-aos="fade-left">
              
            join me
          </button>   
    <Features/>
    <div className="mt-2" data-aos="fade-up">
    <Image   src="/67.jpg" width="2000" height="1000"   /></div>
    </div>
    <div className='bg-black text-center text-white p-4' >
      <p>Made by Reshma Singh <br/> <span>reshmasingh032@gmail.com</span></p>
    </div>
    </div>
      )
    
} 

export default Footer
