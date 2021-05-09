import React ,{useState} from "react"
import Add from "./add"

const Addlist=()=>{
const [movies,setMovies] = useState([]) ;
const addmovie=(title)=> {
    setMovies([{title}]) ;
}
return(
    <div className="list"> 
    <ul> 
        {movies.map(movies=>{
            return(<li key={movies.title}> {movies.title}  </li> )
        })}
        


      
        </ul>



    </div>
)


}
export default Addlist ; 