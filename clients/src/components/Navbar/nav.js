import React from 'react';
import {link} from "react-router-dom";
const nav = () => {
  return (
    <header>
    <div className="width1100 flex space-btw">
        <div>
            <h3>IDEAKART</h3>
        </div>
        <div>
            <form className="search">
                <input type="text" placeholder="Search" /><button><svg width="10" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_2BhAHa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path classNameName="_2BhAHa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg></button>
            </form>
        </div>
        <div>
            <link>
                <a href='#'>About</a>
                <a href="#">Contact</a>
                <a href="#">Sign In</a>
                <a href="#">Sign Up</a>
            </link>
        </div>
    </div>
    </header>
  )
}

export default nav
