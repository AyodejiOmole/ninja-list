import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export interface UserType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
          lat: string,
          lng: string
      }
  },
  phone: string,
  website: string,
  company: {
      name: string,
      catchPhrase: string,
      bs: string
  }
}

export const metadata: Metadata = {
  title: "Ninja Listing | Home"
}

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'force-cache' });
  return res.json();
}

const NinjaListing = async () => {
  const data: UserType[] = await getUsers();

  if(!data) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-full mt-10 lg:p-0 p-4">
      <div className="mx-auto lg:w-4/5 md:4/5 w-full">
        {data.map((user: UserType, index: number) => {
          return (
            <Link href={`/ninja-listing/${user.id}`} key={user.id}>
              <div className='hover:bg-white group delay-100 hover:border-0 w-full border p-5 mt-2 cursor-pointer flex justify-center border-white duration-300 transition-all'>
                  <p className="font-mono text-base leading-normal group-hover:text-black text-white">{user.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
      
    </div>
  )
}

export default NinjaListing;
