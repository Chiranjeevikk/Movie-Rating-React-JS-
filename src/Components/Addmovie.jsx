import { useState } from "react"
import { useHistory } from "react-router-dom";

function Addmovie()
{

    let h = useHistory();

    let [movieName , setMovieName] = useState("");
    let [hero , setHero] = useState("");
    let [ReleaseYear , setReleaseYear] = useState("");
    let [rating , setRating] = useState("");
    let [poster , setPoster] = useState("");

    let handleAddmovie = (e)=>{
        e.preventDefault();

        let newMovie = {
                            movieName , hero , ReleaseYear , rating , poster 
                       }

        fetch("http://localhost:4000/movies" , { method:"POST" ,
                                                 headers : {"Content-Type" : "application/json"} ,
                                                 body : JSON.stringify(newMovie)} )
        .then(()=>{ 
            alert("new movie succefully added") 
            h.push("/")
            // window.location.reload();
    })
    }

    return(
        <div className="add-movie">
            <h1> Movie Rating</h1>
            <hr />

            <form onSubmit={handleAddmovie}>

                <label>Movie Name : </label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>

                <label>Hero : </label>  <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}} />

                <label>Release Year : </label>  <input type="text" value={ReleaseYear} onChange={(e)=>{setReleaseYear(e.target.value)}} />

                <label>Rating : </label>  <input type="number" min="0.1" max="5" step="0.1" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>

                <label>Poster : </label>  <input type="url" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>


                <input type="submit" value="Add Ratings" />

            </form>

        </div>
    )
}
export default Addmovie