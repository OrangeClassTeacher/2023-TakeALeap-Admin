import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[700px] h-screen w-full bg-[url('https://res.cloudinary.com/dnpeugfk4/image/upload/v1684902985/oifzqe3atmlcmsdpbef3.jpg')] bg-cover">
      <div className="w-[500px] h-[400px] bg-black/75 rounded  flex items-center justify-center">
        <div>
          <h1 className="text-4xl text-white text-semibold">Welcome To Restaurant Page</h1>
          <div>
            <div className="flex justify-center gap-10 mt-12">
              <Link href="/registerRes">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Register
                  </span>
                </button>
              </Link>
              <Link href="/login">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
