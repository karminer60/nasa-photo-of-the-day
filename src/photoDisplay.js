
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.

import React from 'react'
import "./App.css";




const PhotoDisplayAgain = (props) => {
  //const [data, setData] = useState(); 
    const { data } = props
  
  return (
    <div className="secondPhotoDisplay">
        <p>
            Photo of the Day Again 
        </p> 
      {data && <img src={data.url} /> }
    </div>
  );
}

export default PhotoDisplayAgain;
