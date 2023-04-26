import React, { useEffect, useState } from 'react'

export default function APIData() {

    const [data,setData] = useState([]);
 
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=> {
            setData(y);
    
            console.log(y);
        })

    },[])

  
    

  return (
    <div>{
        data.map((value)=>{

            return (<><div>{value.id}</div><div>{value.id}</div></>)

        })
        
        
        }


    </div>
  )
}
