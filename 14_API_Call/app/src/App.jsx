import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

      async function getData() {
      const data = await fetch("http://localhost:5000/");
      const names = await data.json();
      setArr(names);
      console.log(names);
    }

  
  const SendData = async() => {
      await fetch("http://localhost:5000/users", {
        method: "POST",

        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      setName("");
      getData();
    };

  const EraseData=async(id)=>{
    await fetch(`http://localhost:5000/users/${id}`,{
      method: "DELETE",
    });
    getData();
  };

  return (
    <div>
     
        <label htmlFor="">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => SendData()}>Add</button>
    
      <br />
      <br />
      {arr.map((value) => (
        <p key={value.id}>
          {value.id}-{value.name} 
          <button onClick={()=>EraseData(value.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default App;
