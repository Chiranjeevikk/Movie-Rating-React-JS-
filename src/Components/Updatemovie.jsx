import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Updatemovie()
{
    let {id} = useParams();
    let h = useHistory()

    let [movieName , setMovieName] = useState("");
    let [hero , setHero] = useState("");
    let [ReleaseYear , setReleaseYear] = useState("");
    let [rating , setRating] = useState("");
    let [poster , setPoster] = useState("");

    let handleUpdateMovie = (e)=>{
        e.preventDefault();
        let updatedMovie = {movieName , hero , ReleaseYear , rating , poster}

        fetch("http://localhost:4000/movies/"+id , { method:"PUT" ,
                                                     headers : {"Content-Type" : "application/json"} ,
                                                     body : JSON.stringify(updatedMovie)} )
        .then(()=>{ 
            alert("movie update succefully") 
            h.push("/")
    })
    }

    return(
        <div className="update-movie">
            <h1>Update Movie</h1>
            <form onSubmit={handleUpdateMovie}>

                <label>Movie Name : </label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>

                <label>Hero : </label>  <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}} />

                <label>Release Year : </label>  <input type="text" value={ReleaseYear} onChange={(e)=>{setReleaseYear(e.target.value)}} />

                <label>Rating : </label>  <input type="number" min="0.1" max="5" step="0.1" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>

                <label>Poster : </label>  <input type="url" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>


                <input type="submit" value="Update Movie" />

            </form>
        </div>
    )
}
export default Updatemovie