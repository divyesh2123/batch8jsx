import React from 'react'
import data from './data'


export default function Display() {
  return (
    <div>

        {
            data.map((value)=> {

                    return(<div>{value.name}</div>)
            })
        }
    </div>
  )
}
