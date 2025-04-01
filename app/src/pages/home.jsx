import "./home.css"
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="Casa page">
            <h1>Welcome</h1>

            <div className="relative">
                <img className= "background-img" src="Images/background.jpg" alt="" />
                <div className="over-img">
                    <h3>From farmers to you</h3>

                </div>
            </div>
        </div>
    )
}

export default Home;