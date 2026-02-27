import { useState } from "react";
import axios from "axios";

export default function DBInteraction() {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [run, setRun] = useState();
  const [country, setCountry] = useState();
  const [id, setId] = useState();

  const getuser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const adduser = async () => {
    try {
      const req = await axios.post("http://localhost:3000/users", {
        name,
        run,
        country,
      });
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const updateuser = async () => {
    // name, run, country, id
    try {
      const req = await axios.post(`http://localhost:3000/users/update`, {
        name,
        run,
        country,
        id,
      });
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteuser = async (id) => {
    try {
      const req = await axios.post(`http://localhost:3000/users/delete`, {
        id,
      });
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Run"
        onChange={(e) => setRun(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <button onClick={updateuser}>Update User</button>
      <br />
      <button onClick={adduser}>Add User</button>
      <br />
      <button onClick={getuser}>Get User</button>
      <br />
      <ul>
        {user &&
          user.map((u) => (
            <li key={u.id}>
              {u.name}
              {u.run}
              {u.country}
              <button onClick={() => deleteuser(u.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
