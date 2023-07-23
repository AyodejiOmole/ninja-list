import React from 'react';
import type { Metadata } from 'next';

interface UserType {
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
    <div>
      {data.map((user: UserType, index: number) => {
        return (
          <div key={index}>
            <p>{user.website}</p>
            {/* <p>{user}</p> */}
          </div>
        )
      })}
    </div>
  )
}

export default NinjaListing;
