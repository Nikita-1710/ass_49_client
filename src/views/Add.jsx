import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Add() {

    const [dish, setDishes] = useState({
        id: "",
        name: "",
        category: ""
    })

    const addDish = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/dishes`, {
                id: dish.id,
                name: dish.name,
                category: dish.category
            })

            if (response.data.success) {
                setDishes({
                    id: "",
                    name: "",
                    category: ""
                })
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6 mt-4">Add Dishes 🍕</h1>

            <div className="flex flex-col items-center gap-5 bg-white p-6 rounded-xl shadow-md w-fit mx-auto">
                <input
                    type='text'
                    placeholder='Enter ID'
                    value={dish.id}
                    onChange={(e) => setDishes({ ...dish, id: e.target.value })}
                    className='w-72 px-5 py-2.5 border border-blue-200 bg-blue-50 text-blue-800 rounded-lg focus:outline-none'
                />

                <input
                    type='text'
                    placeholder='Enter Name'
                    value={dish.name}
                    onChange={(e) => setDishes({ ...dish, name: e.target.value })}
                    className='w-72 px-5 py-2.5 border border-green-200 bg-green-50 text-green-800 rounded-lg focus:outline-none'
                />

                <input
                    type='text'
                    placeholder='Enter Category'
                    value={dish.category}
                    onChange={(e) => setDishes({ ...dish, category: e.target.value })}
                    className='w-72 px-5 py-2.5 border border-purple-200 bg-purple-50 text-purple-800 rounded-lg focus:outline-none'
                />

                <button className="mt-3 w-72 bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-700 transition cursor-pointer" onClick={addDish}>
                    Add Dish
                </button>
            </div>

            <Link
                to='/'
                className='absolute top-6 left-20 text-lg bg-purple-300 px-5 py-1 cursor-pointer rounded-full hover:bg-purple-400 transition'
            >
                Back👈
            </Link>

            <Toaster />
        </div>
    )
}

export default Add
