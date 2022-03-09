import React from 'react'
import Card from './Card'




const Cards = ({palets}) => {

    

  return (
    <div className='flex flex-wrap justify-around mb-auto'>
        {
            palets.map((item,id) => (<Card key={id} {...item.data}/>))
        }
        
    </div>
  )
}

export default Cards