import "./discounts.css"

function Discounts(){
    function Save(){
        return(
            console.log("Code saved")
        )
    }
    return(
        <div className="discounts">
            <h3>Discount Codes</h3>
            <div className="form-field">
                <label className="form-label">Code:</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-field">
                <label className="form-label">Discount:</label>
                <input className="form-control" type="text" />
            </div>
            <button className="btn btn-dark" onClick={Save}>Save</button>
        </div>
    )
}

export default Discounts