import React, { useState } from 'react'

export default function Counter() {

    console.log("reload");

  const [data,setdata] = useState(0);


    let counter = 0;

    const mycounter = ()=> {
        setdata(data+1);
        

     
    }

  return (
    <div className='d'>
        {data}
        <button onClick={mycounter}>+</button>
    </div>
  )
}
