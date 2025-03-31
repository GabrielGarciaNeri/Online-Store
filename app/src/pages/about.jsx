import { useState } from "react"
import "./about.css"

function About(){

    function showData(){
        setVisible(true)
        console.log("button clicked")
    }

    const [isVisible, setVisible] = useState(false)

    return(
        <div className="about page">

            <img src="Images/pfp.jpg" alt="about me"></img>
            <h2>Gabriel</h2>
            { isVisible ? <h5>northpole@gmail.com</h5> : null }
            <button className="btn btn-dark" onClick={showData}>See email</button>
        </div>
    )
}

export default About;