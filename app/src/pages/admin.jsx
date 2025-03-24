import Discounts from "../components/discounts";
import NewProduct from "../components/ProductAdmin";
import "./admin.css"

function Admin(){
    

    return(
        <div className="admin page">
            <h1>Store Administration</h1>
            <section className="parent">
                <div>
                    <h3>1st block</h3>
                    <NewProduct />
                </div>
                <div>
                    <h3>2nd block</h3>
                    <Discounts />
                </div>
            </section>
        </div>
    )
}

export default Admin;