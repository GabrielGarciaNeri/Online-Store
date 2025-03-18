import "./catalog.css"
import Products from "./product";

const mockData = [
    {
        "title": "strawberry",
        "price":123.92,
        "categpry": "Fruit",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "strawberry",
        "price":123.92,
        "categpry": "Fruit",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Melon",
        "price":23.32,
        "categpry": "Fruit",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Milk",
        "price":12.32,
        "categpry": "Dairy",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Cheese",
        "price":13.72,
        "categpry": "Dairy",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Oreos",
        "price":7.72,
        "categpry": "Snacks",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Marias",
        "price":9.72,
        "categpry": "Snack",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
    {
        "title": "Butter",
        "price":1.72,
        "categpry": "Dairy",
        "image": "/images/skdjf.png",
        "_id": "1234567"
    },
]


function Catalog(){
    return(
        <div className="catalog">
            <h1>Check out amazing catalog!</h1>

            <div className="list">
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
            </div>
        </div>
    )
}

export default Catalog;