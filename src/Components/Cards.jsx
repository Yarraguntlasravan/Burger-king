import React from "react";
import "./Cards.css"

class Cards extends React.Component{
    constructor(props){
        super(props)
            console.log(props);
    }
    render(){
        return(
           <>
           

          
            <div className="img-div">
                <img src= {this.props.imgSrc} alt={this.props.alt}/>
                 <h1 id="h1">{this.props.bHead}</h1>
                 <p id="p">{this.props.bDesc}</p>
                 <button id="b">{this.props.btn}</button>
            </div>
            
           </>
        )
    }
}
export default Cards