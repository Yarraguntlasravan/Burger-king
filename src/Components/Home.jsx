import React from "react";

import "./Home.css"

class Home extends React.Component{
    render(){
        return(
            <>
                <div id="home-container">
                    <div id="div-one">
                        <p id="heading">Start Your BK Order.</p>
                        <button className="order-btn" id="order-btn" >
                        <i class="fa-solid fa-bag-shopping"></i> Order PickUp
                        
                        </button>
                        <br></br>
                        <button className="order-btn" id="delivery-btn">
                        <i class="fa-solid fa-truck"></i> Order Delivery
                        </button>
                    </div>
                    <div id="div-two">
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format" alt="home img"/>

                    </div>
                </div>
            </>
        )
    }
}
export default Home