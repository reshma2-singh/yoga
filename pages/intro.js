import React from 'react'
import Image from "next/image";
import Lower from '../components/Lower';
function intro() {
    return (
        <div className=" bg-grey h-screen  justify-between  p-1 ">
            <div className="flex">
            <div style={{ flex: "0.7" }} >
                <h1 className=" text-6xl font-bold mt-1 text-white  p-4 border-b-4 ml-64 ">Meet your Teacher</h1>
                
                <h2 className="text-center text-orange text-4xl ml-64  mt-8 font-semibold font-fruktur ">START DOING AND KEEP GOING
</h2>
               
            </div>



        <div style={{ flex: "0.3" }}  >
            <Image className=" rounded-full p-4 "  src="/14.jpg" width="200" height="200"   />
            
            
        </div>
        </div>
        <Lower/>
        </div>
    )
}

export default intro
