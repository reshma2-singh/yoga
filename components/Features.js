import React from 'react'
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react'
function Features() {
   useEffect(()=>{
      AOS.init({duration:2000});
  },[])
    return (
        
        <div data-aos="fade-up">
        <div className="flex p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  img">
        <div className="card bg-gray-300 mr-4 p-2 ">
           
           <h1 className="text-3xl font-bold text-center font-fruktur mt-10">HATHA YOGA</h1>
           <h1 className="text-2xl font-bold text-center">for strengthening the body</h1>
        </div>
        <div className="card bg-gray-300 mr-4 justify-center">
    
            <h1 className="text-3xl font-bold text-center font-fruktur mt-10">ASHTANGA YOGA</h1>
            <h1 className="text-2xl font-bold text-center">to control mind</h1>
        </div>
        <div className="card bg-gray-300 mr-4">
            
            <h1 className="text-3xl font-bold text-center font-fruktur mt-10">MANTRA CHANTING </h1>
            <h1 className="text-2xl font-bold text-center">to connect with<br/> higher self</h1>
           </div>
        </div>
        <div className="flex p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  img">
            
            <div className="ca bg-gray-300 mr-2 p-2 ">
           <h1 className="text-2xl font-bold text-center text-pink font-fruktur">OBESITY <br/> management</h1>
        </div> 
        <div className="ca bg-gray-300 mr-2 p-2 ">
           <h1 className="text-2xl text-orange font-bold text-center font-fruktur">STRESS <br/> management</h1>
        </div>
        <div className="ca bg-gray-300 mr-2 p-2 ">
           <h1 className="text-2xl text-maroon font-bold text-center font-fruktur">THYROID <br/> management</h1>
        </div>
        <div className="ca bg-gray-300 mr-2 p-2 ">
           <h1 className="text-2xl font-bold text-pink text-center font-fruktur">DIABETES <br/> management</h1>
        </div>
            <div className="ca bg-gray-300 mr-2 p-2 ">
           <h1 className="text-2xl text-orange font-bold text-center font-fruktur">bhagwad geeta &  upanishads</h1>
        </div>
            </div>
      
</div>
        
       
    )
}

export default Features
