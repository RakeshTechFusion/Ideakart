import React from "react"
import "./homepage.css"

const Homepage = ({setsignInUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setsignInUser({})} >Logout</div>
        </div>
    )
}

export default Homepage