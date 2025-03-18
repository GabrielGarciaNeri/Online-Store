import Quantity_Picker from "../components/quantity_picker";
import "./product.css"


function Products(props){

    function Add(){
        console.log("added to cart")
    }

    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
            <label className="unit">Total</label>
            <label className="unit">Unit Price</label>
            </div>
            <div className="prices">
                <label className="total">${props.data.price}</label>
                <label className="unit">${props.data.price}</label>
            </div>
            
            <label>{props.data.category}</label>
            
            <div className="controls">
                <Quantity_Picker></Quantity_Picker>
                <button className="btn btn-sm btn-success" onClick={Add}>Add <i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    )
}

export default Products;