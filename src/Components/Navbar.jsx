import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar()
{
    const [search, setsearch] = useState("")
    return(
    <nav>
        <Link to="/">Home</Link>
        <div>
            <input type="search" placeholder="search the movie" value={search} onChange={(e)=>{setsearch(e.target.value)}}  />
            <Link to={`/searchmovie${search}`}><button>search</button></Link>
            <Link to="/addmovie"> Movie Rating</Link>
            <Link to="/favourites"> favourites </Link>
        </div>
    </nav>
    )
}

export default Navbar