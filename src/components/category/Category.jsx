import React from 'react'

function Category(props) {
const {catagory}=props
  return (
    <div>{
    catagory.map((item)=>{
    return <div key={item.id}><p>{item.p}</p></div>
    })
    }</div>
  )
}

export default Category