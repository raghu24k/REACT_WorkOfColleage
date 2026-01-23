import react, {useState} from "react";
export default function Hookexample(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [selected,setselected] = useState(false);
    return <>
    <h1>
        <h1>Count: {count}</h1>
        <br />
        <h2>Name: {name}</h2>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick = {() => setCount(count - 1)}>Decrement</button>
        <br />
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <br />
        {"selected value"}: {selected? "True" : "False"} <input type="checkbox" onChange={()=>setselected(!selected)}/>
    </h1></>
}