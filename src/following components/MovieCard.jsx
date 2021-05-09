import React  from "react" ;

const MovieCard = ({ data }) => {
    console.log(data);
   
    const { title, description, rating, posterURL } = data;
    return (
  
  
   
     
    
      <div>
        <div className="pho">
        <img height="250px" width="250px"   src={posterURL} /> 
        </div>
        <h3 >{title}</h3>  
        <h4> <i class="bi bi-star-fill"></i>{rating}</h4>
      <p>{description}</p>  
      <div className="b">
      <button type="button" class="btn btn-outline-secondary">watch this movie</button>
      </div>
      
      </div>
     
    
  

    


    );
  };
  
  
  export default MovieCard ; 



