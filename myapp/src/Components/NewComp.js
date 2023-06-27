import React, { Component } from 'react';
import bell1 from "./BellA.jpg";
import bell2 from "./BellB.png";
class NewComp extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Subscribe our application",
            sub:"Subscribe",
            imageurl:bell1
        };
    }
    styles={
       fontStyle:"italic",
       color:"purple"
    };
    Buttonchange=()=>{
        this.setState({
            message:"Hit a bell icon for the update",
            sub: "Subscribed"
        });
    };

    imageChange=()=>{
        this.setState({
            imageurl:bell2,
            message:"Thank you"

        });
    };
    
    render() {
        return (
            <div classname="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img  style={{width:"30px",height:"30px"}}
                src={this.state.imageurl} 
                onClick={this.imageChange}
                alt=""/>
            </div>
        );
    }
}


export default NewComp;