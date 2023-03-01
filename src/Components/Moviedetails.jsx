import { useState , useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom"

function Moviedetails()
{
    let {id} = useParams();
    let h = useHistory();

    let [movie , setMovie] = useState( null );
    let [pending , setPending] = useState( true );
    let [error , setError] = useState( null );
   
    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:4000/movies/" + id  )
        .then( (res)=>{ 
                          if(res.ok == false)
                          {
                            throw Error("data that you are searching for is not present")
                          }
                          return res.json() 
                      } )
        .then((data)=>{setMovie(data); setPending(false) })
        .catch((err)=>{setError(err.message); setPending(false) })
  
      } , 2000 )
    } , [])

    let handleDeleteMovie = ()=>{
      fetch("http://localhost:4000/movies/"+ id , {method:"DELETE"} )
      .then(()=>{
        alert("movie has been deleted");
        h.goBack();
      })
    }

    return(
        <div>
            { error    &&  <h1>{error}</h1>}
            { pending  &&  <div className="loader"></div> }
            { movie   &&  <div className="movie-detail">

                            <img src={movie.poster} />
                            <h2>Movie name : {movie.movieName} </h2>
                            <h3>Movie hero : {movie.hero} </h3>
                            <h3>Release Year : {movie.ReleaseYear} </h3>
                            <h3>Movie rating :  {movie.rating}</h3>
                            <button onClick={handleDeleteMovie} > Delete Movie </button>
                            <Link to={`/update${movie.id}`}><button> Update Movie </button></Link>
                         </div>
            }
        </div>
    )
}
export default Moviedetails;

