import React from "react";
import saunaLogo from "../images/saunalogo.svg"

const Home = () => {
    return (
        <div className="top">
            <div　className="container">
             <div className="logo">
                 <img className="logo-pic" src={saunaLogo} />
             </div>
            </div>
            <div>
              <input />
            </div>
            <div className="sauna-pic">
                <p>サウナの効能って何？</p>
                <div className="sauna-pic-image">

                </div>
            </div>
        </div>
    )
}


export default Home;