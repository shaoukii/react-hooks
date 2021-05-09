import React, { useState } from "react";
import "./App.css";
import MovieCard from "./following components/MovieCard";
import lists from "./following components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import Addlist from "./following components/add" ;

import "./style.css";
 
function App() {
  const [input, setinput] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };
 
  console.log("input", input);
  
  const [tape, settape] = useState("");
  const change = (e) => {
    e.preventDefault();
    settape(e.target.value);
  };
 
  console.log("input", tape);
  
  return ( 

<div className="all">   
<div className="input">


<>
<input
        type="texte"
        placeholder="search by title "
        onChange={handlechange}
        value={input} 
      />
      </>
      <>
      <input
        type="texte"
        placeholder="search by rate"
        onChange={change}
        value={tape}
      />
      </> 
      
      </div>

    <div className="cha">
      {lists
        .filter((i) => {
          return i.title.toLocaleLowerCase().includes(input.toLowerCase());
        })
        .filter((i) => {
          return i.rating.toLocaleLowerCase().includes(tape.toLowerCase());
        })
        .map((Lists) => (
          <MovieCard data={Lists} />
        ))}  
        <div className="add">
<Addlist></Addlist>
         </div>
    </div> 
  </div>
  );
}

export default App;
 

