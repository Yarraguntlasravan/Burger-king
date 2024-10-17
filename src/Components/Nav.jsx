import React from "react";
import "./Nav.css"

class Nav extends React.Component{
    render(){
        return(
            <>
                <div id="container">
                   <div>
                        <i id="menu-bar" class="fa-solid fa-bars"></i>
                   </div>
                    <div>
                        <p id="burger-king">Burger King</p>    
                    </div>
                    <div>
                    <i id="user" class="fa-solid fa-user"></i>
                    <button id="view-cart-btn">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span id="cart">View cart</span>
                    </button>
                    </div>
                </div>
            </>
        )
    }
}
export default Nav