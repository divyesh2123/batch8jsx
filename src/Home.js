import React from 'react'
import Data from './data';

export default function Home() {

    
  return (
    <div>
        {
            Data.map((value)=> {

                return(<div>{value.name}</div>)

            })
        }

    </div>
  )
}
