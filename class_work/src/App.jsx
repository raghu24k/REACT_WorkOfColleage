import PropsExample from "./12-26-25/props_example";
import React from "react";
import DefaultProps from "./12-26-25/defaultprops";
function App() {
    return (
        <>
            <PropsExample
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALbFf1X2wRJT6zHjrktK_Mt9yb0jnBLZb7w&s"
                button_txt="View Profile"
                date="2024-12-26"
            />
            {/* <DefaultProps /> */}
        </>
    )
}

export default App;