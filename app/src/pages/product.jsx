import Quantity_Picker from "../components/quantity_picker";
import "./product.css"


function Products(){

    function Add(){
        console.log("added to cart")
    }

    return(
        <div className="product">
            <h5>Title Here</h5>

            <Quantity_Picker></Quantity_Picker>
            <button className="btn btn-sm btn-success" onClick={Add}>Add <i class="fa-solid fa-cart-plus"></i></button>
        </div>
    )
}

export default Products;