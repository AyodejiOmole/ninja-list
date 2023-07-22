import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center lg:p-10 md:p-10 py-10 px-2'>
      <h1 className='text-xl font-extrabold my-8 font-mono'>Homepage</h1>
      <p className="font-mono text-base my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className="font-mono text-base my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/ninja-listing">
        <div className="my-6 p-2 lg:w-[200px] md:w-[200px] hover:text-white text-black font-mono w-full mx-auto bg-white hover:border-2 rounded hover:border-white hover:bg-black">
          See the Ninjas
        </div>
      </Link>
    </div>
  )
}