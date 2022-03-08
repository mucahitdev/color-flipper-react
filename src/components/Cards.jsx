import React from 'react'
import Card from './Card'


const Cards = ({dataColor}) => {
    console.log(dataColor)
  return (
    <div className='flex flex-wrap justify-around'>
        {
            dataColor.map((item,id) => (<Card key={id} {...item}/>))
        }
        
    </div>
  )
}

export default Cards