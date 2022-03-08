import React from 'react'

const Card = ({listedBy, role, avatar, color:{renk1, renk2, renk3, renk4}}) => {

    return (
        <div className='card w-full  sm:w-3/6   md:w-2/6  lg:w-1/5   px-2 mb-3'>
            <div className='border h-72 rounded-lg'>
                <div className='header bg-gray-400 rounded-tl-lg rounded-tr-lg flex h-1/5   p-2'>
                    <img className='w-8 h-8 rounded-full' src={avatar} alt="Avatar User" />
                    <div className='flex flex-col w-full'>
                        <div className='ml-2 flex justify-between w-full'>
                            <p className='text-xs'>Listed by</p>
                            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white  rounded-full" style={{backgroundColor:`${role==='Admin'?'#019267':'#febf5e'}`}}> {role} </span>
                        </div>
                        <p className='text-sm ml-2 '>{listedBy}</p>
                    </div>
                </div>
                <div className="colors pt-1 h-4/5">
                    <ul className='h-full'>
                        <li className='h-1/4' style={{backgroundColor:`${renk1}`}}> {renk1} </li>
                        <li className='h-1/4' style={{backgroundColor:`${renk2}`}}> { renk2} </li>
                        <li className='h-1/4' style={{backgroundColor:`${renk3}`}}> { renk3} </li>
                        <li className='h-1/4' style={{backgroundColor:`${renk4}`}}> {renk4 } </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card