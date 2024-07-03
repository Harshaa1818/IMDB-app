import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

const HomePage = () => {
  const [res, setRes] = useState([]);

  const[page,setPage]=useState(1);

  const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmUwZTA1OTg5ZGI0NDJmMzZmNzhlM2I4MjY4ZTQzOSIsIm5iZiI6MTcxOTk0NTEyOC4wMzM3NCwic3ViIjoiNjY4MmVhNDM3MDFjZThmYzBmM2FlNjE5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OVY6dSgbSoqI9SnDKxwbpxuOHyUdmKGFC3vLF-8ZcTk"
   
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?page=${page}`,
        {
        headers:{
            Authorization:`Bearer ${token}`,
            Accept:"application/json"
        }})
      .then((e) => {
        setRes(e.data); //preserve previous value in res
      })
      .catch((e) => console.log("error is ", e));
  }, [page]);

  console.log(res);

  const pageIncrement=()=>{
    setPage(page+1);
  }
 
  
  return( <>
  <div className="movie-container">
    {res.results?.map((movie)=>(
        <card className="card">
            <div className="content">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        <h4>{movie.title}</h4>
        <h5>{movie.overview}</h5>
            </div>
        <div className="buttons">
        <button>Add to fav</button>
        <button>Watch Later</button>
        </div>
        </card>
    ))}
    <button onClick={pageIncrement}>Load More</button>
   

  </div>
  </>)
  
};

export default HomePage;
