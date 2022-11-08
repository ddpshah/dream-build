import React,{useEffect,useState} from "react";
import "./Banner.css";
import banner_1 from "./Assets/banner_home.jpg";
import axios from "./axios";
import requests from "./Requests";

function Banner() {

    // const[movie,setMovie]=useState([]);

    // useEffect(()=>{
    //     async function fetchData(){
    //         const request=await axios.get(requests.fetchNetflixOriginals);
    //         setMovie(
    //             request.data.results[
    //                 Math.floor(Math.random()*request.data.results.length-1)
    //             ]
    //         );
    //         return request;
    //     }
    //     fetchData();
    // },[]);
    // console.log(movie);



  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //backdrop_path is the image that is shown in the background
        backgroundImage: `url(${banner_1})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">John Wick</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.`,
            100
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
