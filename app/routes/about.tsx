export default function About() {
    return <div>
        <ul>
            <li>
                <div>
                    <p>Category: {strCategory}</p>
                    <img src={strCategoryThumb}></img>
                    <p>Description: {strCategoryDescription}</p>
                </div>
            </li>
        </ul>
    </div>
}