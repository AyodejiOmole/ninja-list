import React from 'react';

const Ninja = ({ params }: { params: { id: string }} ) => {
  return (
    <div>
      {params.id}
    </div>
  )
}

export default Ninja;
