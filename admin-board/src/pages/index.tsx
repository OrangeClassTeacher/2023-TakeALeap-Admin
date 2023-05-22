import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('../assets/restaurant-interior.jpg')] bg-cover">
      <div>
        <div className="flex justify-center gap-10 mt-12">
          <Link href="/registerRes">
            <button className="rounded-full text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Register restaurant
            </button>
          </Link>
          <Link href="/login">
            <button className="rounded-full text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Login restaurant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
