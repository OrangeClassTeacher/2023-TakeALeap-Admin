import Image from "next/image";
import logo from '../assets/logo.png'
import Link from "next/link";

export default function Home() {

  return (
    <div className="mt-72">
      <Image src={logo} alt='logo' width={300} className='ml-[40%]' />
      <div className="flex justify-center gap-16 mt-12">
        <Link href='/registerRes'>
          <button
            className="rounded-full text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Register restaurant
          </button>
        </Link>
        <Link href='/login'>
          <button
            className="rounded-full text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Login restaurant
          </button>
        </Link>
      </div>
    </div>
  )
}
