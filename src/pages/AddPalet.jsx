import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';


const AddPalet = () => {
    const [colorRan, setColorRan] = useState({})
    const [userName, setUserName] = useState('')
    const [paletActive, setPaletActive] = useState(false)
    const createPalet = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColorRan({ randomColor, randomColor2, randomColor3, randomColor4 })
        setPaletActive(true)
    }
   
    const dataInit =
    {
        listedBy: "User",
        role: "Patika",
        avatar: 'https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo.png',
        color: {
            renk1: colorRan.randomColor,
            renk2: colorRan.randomColor2,
            renk3: colorRan.randomColor3,
            renk4: colorRan.randomColor4
        }
    }
    const sendPallet = async (e) => {
        e.preventDefault()
        if (userName !== '') {

            try {
                await addDoc(collection(db, 'palets'), {
                    listedBy: userName,
                    role: "Patika",
                    avatar: 'https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo.png',
                    created: Timestamp.now(),
                    color: {
                        renk1: colorRan.randomColor,
                        renk2: colorRan.randomColor2,
                        renk3: colorRan.randomColor3,
                        renk4: colorRan.randomColor4
                    }

                })
            } catch (err) {


            }

            setPaletActive(false)
            setUserName('')
        } else {
            console.log("isim gir");
        }
    }




    return (
        <div className='mt-3 flex justify-center flex-col items-center'>
            <div className='flex items-center justify-center ' >

                <button onClick={createPalet} className="bg-red-400 hover:bg-red-300 text-white rounded-full px-4 py-3">
                    Palet Üret
                </button>
            </div>
            {paletActive ?
                <div>
                    <div className='card w-72  px-2 mb-3 mt-7'>
                        <div className='border h-72 rounded-lg'>
                            <div className='header bg-gray-400 rounded-tl-lg rounded-tr-lg flex h-1/5   p-2'>
                                <img className='w-8 h-8 rounded-full' src={dataInit.avatar} alt="Avatar User" />
                                <div className='flex flex-col w-full'>
                                    <div className='ml-2 flex justify-between w-full'>
                                        <p className='text-xs'>Listed by</p>
                                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white  rounded-full" style={{ backgroundColor: `${dataInit.role === 'Admin' ? '#019267' : '#febf5e'}` }}> {dataInit.role} </span>
                                    </div>
                                    <p className='text-sm ml-2 '>{userName}</p>
                                </div>
                            </div>
                            <div className="colors pt-1 h-4/5">
                                <ul className='h-full'>
                                    <li className='h-1/4' style={{ backgroundColor: `${colorRan.randomColor}` }}> {colorRan.randomColor} </li>
                                    <li className='h-1/4' style={{ backgroundColor: `${colorRan.randomColor2}` }}> {colorRan.randomColor2} </li>
                                    <li className='h-1/4' style={{ backgroundColor: `${colorRan.randomColor3}` }}> {colorRan.randomColor3} </li>
                                    <li className='h-1/4' style={{ backgroundColor: `${colorRan.randomColor4}` }}> {colorRan.randomColor4} </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div> : "Palet ürete bas"
            }
            <div>
                <form className="w-full max-w-sm">
                    {
                        paletActive?
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ali Veli" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <button onClick={sendPallet} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Send pallet
                            </button>
                        </div>:""
                    }
                </form>
                {userName ==="" && paletActive?
                    <span className='flex items-center justify-center mt-2'>İsim zorunlu</span>:""
                }
            </div>
            <Link to="/" className='bg-lime-400 hover:bg-lime-200 rounded-full mt-10 px-5 py-3'>
                <b>Home</b>
            </Link>
        </div>
    )
}

export default AddPalet