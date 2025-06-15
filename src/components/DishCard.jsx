import React from 'react'

function DishCard({ id, name, category }) {
    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 m-4 w-64 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-yellow-900">{id} - {name}</h2>
            <p className="mt-3 text-sm font-medium text-yellow-700 uppercase">{category}</p>
        </div>
    )
}

export default DishCard
