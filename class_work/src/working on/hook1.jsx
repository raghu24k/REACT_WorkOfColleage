import react, {useState} from "react";
export default function Hookexample1(){
    const [user,setUser] = useState({
        name:"",
        age:"",
        male: false,
        email: "",
        city: "",
    })
    return <>
    <h1>User Information</h1>
    <h2>Name {user.name}</h2>
    <h2>Age {user.age}</h2>
    <h2>Male {user.male}</h2>
    <h2>Email {user.email}</h2>
    <h2>Gender:{user.male? "Male" : "Female"}</h2>
    <h2>City: {user.city}</h2>
        <br />
        <input type="text" placeholder="Name" onChange={(e)=> setUser({...user,name:e.target.value})}/>
        <br />
        <input type="number" placeholder="Age" onChange={(e)=> setUser({...user,age:e.target.value})}/>
        <br />
        <input type="checkbox" onChange={()=> setUser({...user,male:!user.male})}/>
        <br />
        <input type="email" placeholder="Email" onChange={(e)=> setUser({...user,email:e.target.value})}/>
        <br />
        <label for="city">Choose a city:</label>
        <select onChange={(e)=> setUser({...user,city:e.target.value})}>
          <option value="Punjab">Punjab</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
        </select>
    </>
}