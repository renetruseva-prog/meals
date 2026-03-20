export default function About({ loaderData }) {
    return (
        <div className="container">
            <ul className="grid">
                {loaderData.map((cat) => (
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
        </div>
    );
}

export async function clientLoader({ params }: Route.LoaderArgs) {
    // const mealId = params.mealId;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await res.json();
    return data.categories;
}