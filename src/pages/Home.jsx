import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase';
import Cards from '../components/Cards';



const Home = () => {


    const [palets, setPalets] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'palets'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setPalets(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })

    }, [])
    return (
        <div className=''>
            <div className='  h-20 w-full flex justify-center  items-center'>
                <Link to="/add" className='bg-lime-400 hover:bg-lime-200 rounded-full px-5 py-3'>
                    <b>Add Color Palet</b>
                </Link>

            </div>
            <Cards palets={palets} />

        </div>
    )
}

export default Home