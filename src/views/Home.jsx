import React, { useEffect, useState } from 'react'
import DishCard from '../components/DishCard'
import axios from 'axios'

function Home() {

    const [dishes, setDishes] = useState([])

    const loadDishes = async () => {
        const response = await axios.get(`http://localhost:5002/dishes`)
        setDishes(response.data.data)
    }

    useEffect(() => {
        loadDishes()
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6 mt-5">All Dishes 😋</h1>

            <div>
                {dishes.map((dishObj, i) => {
                    const { id, name, category } = dishObj
                    return (
                        <DishCard key={i} id={id} name={name} category={category} />
                    )
                })}
            </div>

        </div>
    )
}

export default Home