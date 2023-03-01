import { Link } from "react-router-dom"

function Movieslist( {datas , title} )
{
    return(
      <>
      <h1>All Movies</h1>
    <div className='movies-list'>
       
     {
        datas.map( (movie)=>{ 
          return(
                    <Link to={`/moviedetail${movie.id}`}>
                      <div className="movie">
                              <img src={movie.poster}  />
                              <h1> {movie.movieName} </h1>
                      </div>
                    </Link>
                )})
     }
    </div>
    </>
    )
}

export default Movieslist  