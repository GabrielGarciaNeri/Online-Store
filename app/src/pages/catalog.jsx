import "./catalog.css"
import Products from "./product";

const mockData = [
    {
        "title": "Strawberry",
        "price":123.92,
        "category": "Fruit",
        "image": "/Images/Strawberry.avif",
        "_id": "1234567a"
    },
    {
        "title": "Grapes",
        "price":123.92,
        "category": "Fruit",
        "image": "/Images/Grapes.jpg",
        "_id": "1234567b"
    },
    {
        "title": "Melon",
        "price":23.32,
        "category": "Fruit",
        "image": "/Images/Melon.jpg",
        "_id": "1234567c"
    },
    {
        "title": "Milk",
        "price":12.32,
        "category": "Dairy",
        "image": "/Images/Milk.jpg",
        "_id": "1234567d"
    },
    {
        "title": "Cheese",
        "price":13.72,
        "category": "Dairy",
        "image": "/Images/Cheese.jpg",
        "_id": "1234567e"
    },
    {
        "title": "Oreos",
        "price":7.72,
        "category": "Snacks",
        "image": "/Images/Oreos.jpg",
        "_id": "1234567f"
    },
    {
        "title": "Marias",
        "price":9.72,
        "category": "Snacks",
        "image": "/Images/Maria.jpg",
        "_id": "1234567g"
    },
    {
        "title": "Butter",
        "price":1.72,
        "category": "Dairy",
        "image": "/Images/butter.jpg",
        "_id": "1234567h"
    },
]

const mockCategories = ["Fruit", "Vegtable", "Snacks", "Dairy"]

function Catalog(){
    return(
        <div className="catalog">
            <h1>Check out amazing catalog!</h1>

            <div className="filters">
                {mockCategories.map(cat => <button className="btn btn-outline-success">{cat}</button>)}
            </div>
            <div className="list">
                {mockData.map( item => <Products key={item._id} data={item}></Products>)}
                
            </div>
        </div>
    )
}

export default Catalog;