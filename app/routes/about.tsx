import React, { useState } from 'react';

export default function About({ loaderData }) {
    const [inputValue, setInputValue] = useState('');
    const filteredData = loaderData.filter(category =>
        category.strCategory.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    return (
        <div className="container">
            <div className="input-container">
                <label>
                    <div className="input-wrapper">
                    <input
                        type="text"
                        className="input"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="Search for a category..."
                    />
                    </div>
                </label>
            </div>
            <br></br>
            <ul className="grid">
                {filteredData.map((cat) => (
                    <li key={cat.idCategory} className="card">
                        <img
                            src={cat.strCategoryThumb}
                            alt={cat.strCategory}
                            className="card-img"
                        />
                        <div className="card-content">
                            <h2>{cat.strCategory}</h2>
                            <p>{cat.strCategoryDescription}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export async function clientLoader({ params }: Route.LoaderArgs) {
    // const mealId = params.mealId;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await res.json();
    return data.categories;
}

export function handleSubmit(e) {
    e.preventDefault();
}