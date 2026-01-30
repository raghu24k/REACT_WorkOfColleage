import React, { useState } from "react";
export default function Hookexample4(){
    const[firstname,setFirstName]=useState("")
    const[lastname,setLastName]=useState("")
    const[mobile,setMobile]=useState("")
    const[records,setRecords]=useState([])
    }
return(
    <>
    <input type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/>
    <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"/>
    <input type="text" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile"/> 
    <button>Add</button>
    <ul>
        {records.map((x)=>)}
    </ul>
    </>
)