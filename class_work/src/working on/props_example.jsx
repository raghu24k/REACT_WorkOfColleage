import React, { Component } from "react";
import "../user-card.css";
class PropsExample extends Component {
    render() {
        return (
            <>
                {/* <h1>Props Example</h1> */}
                <div className="user-card">
                    <img src={this.props.image} alt="" />
                    <button>{this.props.button_txt}</button>
                    <h3>{this.props.date}</h3>
                </div>

            </>
        )
    }
}
export default PropsExample;