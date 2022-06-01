import React from 'react'
import {useRouter} from 'next/router'
function Lower() {
  const router = useRouter();
    return (
        <div >
           <p className="text-white text-xl p-4">Welcome Yogis, I am your host and my name is Shubham Ujjwal. I have been learning yoga
philosophy since I left my job as a customer care agent in 2017. Before that, I graduated as a  <span className="text-2xl font-bold">mechanical engineer</span> in
  2016. I started my formal education in yoga with a foundation
course(FCYScW) from MDNIY, New Delhi in Jan, 2019 from my teacher Mr. Rajesh Kumar. I
keep practicing after that for almost 2.5 years when I came to know about a "Yoga teacher and
evaluator" course from the "Yoga certification board" (YCB)which was established by the
Ministry of AYUSH. My mother told me about the ongoing training under Patanjali Yogpeeth for
YCB level-3 (Yoga teacher and evaluator). With the grace and hard work of the teachers there
along with my efforts, I passed my exam in September 2021 and became a <span className="text-2xl font-bold"> certified yoga
teacher under the ministry of AYUSH.</span> At the same time, I got <span className="text-2xl font-bold"> certified by Patanjali Yogpeeth as
an Assistant yoga teacher.</span> I have been experiencing for the last 3 and a half years how yogic
lifestyle can improve your physical as well as mental health, together. So, I decided to share it
with everyone who is interested and started giving online yoga classes. At present, I have
decided to teach Hatha Yoga and Ashtanga yoga practices in my online classes which are open
for everyone.<br/> 'Click here to know more about <span onClick={() => router.push('about')} className="cursor-pointer">YOGA</span> 

</p>  
        </div>
    )
    
}

export default Lower
