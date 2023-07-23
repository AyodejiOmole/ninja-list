import React from 'react';
import getUser from '@/lib/getUser';
import { Suspense } from 'react';

type Params = {
  params: {
    id: number
  }
}

async function getPost(params: { id: number } ) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
  const data = await res.json();
 
  return data;
};

const Ninja = async ({ params }: Params ) => {
  const data: Promise<UserType> = getUser(params.id);
  const ninja = await data;

  return (
    <div className='mt-10 w-full flex justify-center'>
      <div className="mx-auto">
        <Suspense fallback={<h1>Loading...</h1>}>
          <h1 className='font-mono mt-3 text-xl font-extrabold'>{ ninja.name }</h1>
          <p className='font-mono mt-3 text-base font-normal'>{ ninja.email }</p>
          <p className='font-mono mt-3 text-base font-normal'>{ ninja.website }</p>
          <p className='font-mono mt-3 text-base font-normal'>{ ninja.address.city }</p>
        </Suspense>
      </div>
    </div>
  )
}

export default Ninja;
