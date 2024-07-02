import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

const HomePage = () => {
  const [res, setRes] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmUwZTA1OTg5ZGI0NDJmMzZmNzhlM2I4MjY4ZTQzOSIsIm5iZiI6MTcxOTg1ODg4MC41NzAwMjQsInN1YiI6IjY2ODJlYTQzNzAxY2U4ZmMwZjNhZTYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HdJ6iS61DXTl445XSf2D7u8lDxB5woS2ZCyJ5zNpAG4";
  const ApiKey = "c2e0e05989db442f36f78e3b8268e439";
  useEffect(() => {
    axios
      .get("")
      .then((e) => {
        setRes([...res, e]); //preserve previous value in res
      })
      .catch((e) => console.log("error is ", e));
  }, [res]);

  //console.log(res);

 
  
  return( <></>)
  
};

export default HomePage;
