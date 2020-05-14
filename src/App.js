
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.
import React, { useState, useEffect } from 'react'
import "./App.css";
const [comments, setComments] = useState(props.comments); 

useEffect(() => {
  // this code in here will run, after the first DOM surgery only
  // BASE_URL and API_KEY (http://localhost:4000/friends?api_key=xyz)
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=W57gnrIioT3Fpi94SzcBtWGEBvcRRmIoii2k1DqH`)
    .then(response => {
      response.data
    })
    .catch(err => {
      debugger
    })
}, [])
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
