import React, { useEffect, useState } from 'react'
import DishCard from '../components/DishCard'
import axios from 'axios'
import { Link } from 'react-router'

function Home() {

    const [dishes, setDishes] = useState([])

    const loadDishes = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/dishes`)
        setDishes(response.data.data)
    }

    useEffect(() => {
        loadDishes()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6 mt-4">All Dishes 😋</h1>

            <div className="flex flex-wrap justify-center gap-6">
                {dishes.map((dishObj, i) => {
                    const { id, name, category } = dishObj;
                    return (
                        <DishCard key={i} id={id} name={name} category={category} loadDishes={loadDishes}/>
                    );
                })}
            </div>

            <Link to='/add' className='absolute top-6 left-20 text-lg bg-purple-300 px-5 py-1 cursor-pointer rounded-full hover:bg-purple-400 transition'>
                Add➕
            </Link>
        </div>
    )
}

export default Home