import Link from 'next/link'
import Image from "next/image";
function contact() {
  return (
    <div className="h-screen bg-gray-200 ">
        <h1 className="text-3xl font-bold text-center p-4 ">Follow me on instagram</h1>
        <div className='cont display:flex mt-40 align-items: center'>
        <Link href="https://www.instagram.com/yogawithshubham/">

          <a> <Image
                       src="/insta.jpg" width="200" height="200" ml="40" 
                
                /><p className='ml-12'>click on icon</p></a>
        </Link>
        </div>
    </div>
  )
}

export default contact