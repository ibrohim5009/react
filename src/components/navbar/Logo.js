import React from 'react'

function Logo(props) {
const {logo}= props;
  return (

    <div>{logo.map((item)=>{
        return <div key={item.id}>
            <p>{item.p}</p>
        </div>
    })}</div>
  )
}

export default Logo