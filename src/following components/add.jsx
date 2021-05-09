import React, { useState } from "react"


const Add = ({addmovie}) => {
const [title, settitle] = useState('');
const handleSubmit =(e) =>{
  e.preventDefault();
  addmovie(title);
  settitle('')

}
return(
  <form  onSubmit={handleSubmit}>
  <label></label> 
<input type="text" value={title} required onChange={(e) => settitle(e.target.value)}></input>
<input type="submit" value="addmovie" ></input>

  </form>
)

}  


export default Add ; 