import react, {useState} from "react";
export default function Hookexample(){
    const [count,setCount] = useState(0);
    return <>
    <h1>
        <h1>Count: {count}</h1>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick = {() => setCount(count - 1)}>Decrement</button>
    </h1></>
}