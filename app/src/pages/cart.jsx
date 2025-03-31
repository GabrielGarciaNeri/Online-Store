import { useContext } from "react";
import "./cart.css"
import DataContext from "../state/dataContext";
import { Link } from "react-router-dom";

function Cart(){

    //read cart from context
    const cart = useContext(DataContext).cart
    function getNumOfProds(){
        let sum = 0
        for(let i=0; i<cart.length; i++){
            sum += cart[i].quantity
        }
        return sum
    }
    function getTotal(){
        let total = 0
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }
        return total.toFixed(2)
    }
    function getCartEmptyMessage(){
        if(cart.length >0) return null;

        return(
            <div className="empty-alert">
                <h5>Your cart is empty, you can add products from the catalog page!</h5>
                <Link className="btn btn-outline-primary" to="/catalog">Go to Catalog</Link>
            </div>


        )
    }

    return(
        <div className="cart page">
            <h1>Are you ready to complete your order?
            </h1>
            <h4>We have {getNumOfProds()} products for you!</h4>

            {getCartEmptyMessage()}

            <div className="parent">
                <div className="prod-list">
                    {cart.map(prod =>
                        <div className="prod-in-cart">
                            <img src={prod.image} alt="" />
                            <label className="title">{prod.title}</label>
                            <label className="fract-1">{prod.price}</label>
                            <label className="fract-1">{prod.quantity}</label>
                            <label className="fract-1">{(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className="btn btn-sm btn-danger">Remove</button>
                        </div>
                    )}
                </div>
                <div className="total">
                    <h4>Complete your order</h4>

                    <h2>${getTotal()}</h2>
                    
                    <Link to="/thankyou" className="btn btn-success">Pay here</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;