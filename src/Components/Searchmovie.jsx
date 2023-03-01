import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Movieslist from "./Movieslist";

function Searchmovie()
{
    let {searchKeyword} = useParams();
    let [movies , setMovies] = useState( null );
    let [pending , setPending] = useState( true );
    let [error , setError] = useState( null );


    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:4000/movies")
        .then( (res)=>{ 
                          if(res.ok == false)
                          {
                            throw Error("data that you are searching for is not present")
                          }
                          return res.json() 
                      } )
        .then((data)=>{setMovies(data); setPending(false) })
        .catch((err)=>{setError(err.message); setPending(false) })
  
      } , 2000 )
    } , [])

    return(
        <div>
            { error    &&  <h1>{error}</h1>}
            { pending  &&  <div className="loader"></div> }
            { movies   &&  <Movieslist datas={movies.filter((movie)=>{ return (movie.movieName.toUpperCase().includes(searchKeyword.toUpperCase()))})}  title="searched movies"/>}
        </div>
    )
}

export default Searchmovie