
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.


import "./App.css";
import React, { useState, useEffect } from 'react'
import axios from 'axios';




const PhotoDisplayAgain = (props) => {
  const [data2, setData2] = useState(); 
    const { data } = props
    useEffect(() => {
        // this code in here will run, after the first DOM surgery only
        // BASE_URL and API_KEY (http://localhost:4000/friends?api_key=xyz)
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=W57gnrIioT3Fpi94SzcBtWGEBvcRRmIoii2k1DqH`)
          .then(response => {
            setData2(response.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
  
  return (
    <div className="secondPhotoDisplay">
        <p>
            Photo of the Day Again 
        </p> 
      {data && <img src={data.url} /> }
      {data2 && <img src={data2.url}/>}

    </div>
  );
}

export default PhotoDisplayAgain;
