import "./catalog.css"
import Products from "./product";

const mockData = [
    {
        "title": "Strawberry",
        "price":123.92,
        "category": "Fruit",
        "image": "/Images/Strawberry.avif",
        "_id": "123456a"
    },
    {
        "title": "Grapes",
        "price":123.92,
        "category": "Fruit",
        "image": "/Images/Grapes.jpg",
        "_id": "12345b"
    },
    {
        "title": "Melon",
        "price":23.32,
        "category": "Fruit",
        "image": "/Images/Melon.jpg",
        "_id": "12367c"
    },
    {
        "title": "Milk",
        "price":12.32,
        "category": "Dairy",
        "image": "/Images/Milk.jpg",
        "_id": "14567d"
    },
    {
        "title": "Cheese",
        "price":13.72,
        "category": "Dairy",
        "image": "/Images/Cheese.jpg",
        "_id": "1267e"
    },
    {
        "title": "Oreos",
        "price":7.72,
        "category": "Snacks",
        "image": "/Images/Oreos.jpg",
        "_id": "12347f"
    },
    {
        "title": "Marias",
        "price":9.99,
        "category": "Snacks",
        "image": "/Images/Maria.jpg",
        "_id": "12347g"
    },
    {
        "title": "Butter",
        "price":1.99,
        "category": "Dairy",
        "image": "/Images/butter.jpg",
        "_id": "234567h"
    },
]

const mockCategories = ["Fruit", "Vegtable", "Snacks", "Dairy"]

function Catalog(){
    return(
        <div className="catalog page">
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