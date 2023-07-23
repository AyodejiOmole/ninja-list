import React from 'react';
import { UserType } from '../page';

// export async function generateStaticParams() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   const paths = data.map((user: UserType) => ({
//     params: { id: user.id.toString() },
//   }));

//   // const hostPath = profiles?.map((profile) => ({
//   //   params: {host: profile.username},
//   // }))

//   return {
//     paths,
//   } 
// };

async function getPost(params: { id: number } ) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
  const data = await res.json();
 
  return data;
};

const Ninja = async ({ params }: { params: { id: number }} ) => {
  const ninja: UserType = await getPost(params);
  return (
    <div className='mt-10 w-full flex justify-center'>
      <div className="mx-auto">
        <h1 className='font-mono mt-3 text-xl font-extrabold'>{ ninja.name }</h1>
        <p className='font-mono mt-3 text-base font-normal'>{ ninja.email }</p>
        <p className='font-mono mt-3 text-base font-normal'>{ ninja.website }</p>
        <p className='font-mono mt-3 text-base font-normal'>{ ninja.address.city }</p>
      </div>
    </div>
  )
}

export default Ninja;
