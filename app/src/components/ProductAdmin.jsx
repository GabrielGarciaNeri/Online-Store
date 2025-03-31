import "./ProductAdmin.css"

function NewProduct(){
    function Save(){
        return(
            console.log("Product Saved")
        )
    }


    return(
        <div className="newProduct">
            <div className="form-field">
                <label className="form-label">Title:</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-field">
                <label className="form-label">Price:</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-field">
                <label className="form-label">Image (url):</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-field">
                <label className="form-label">Category:</label>
                <input className="form-control" type="text" />
            </div>
            <button className="btn btn-dark" onClick={Save}>Save</button>
        </div>
    )
}

export default NewProduct;