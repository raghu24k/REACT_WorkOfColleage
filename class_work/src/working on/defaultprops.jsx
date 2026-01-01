import React, { Component } from "react";
class DefaultPropsExample extends Component {
    render() {
        const { text, onclick } = this.props;
        return (
            <div>
                <p>{text}
                    <button onClick={onclick}>click me</button>
                </p>
            </div>


        )
    }
}
DefaultPropsExample.defaultProps = {
    text: "this is the default text.",
    onclick: () => { console.log("default onclick") },
};

export default DefaultPropsExample;
