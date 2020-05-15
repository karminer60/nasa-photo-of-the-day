
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.


import "./App.css";
import React, { useState} from 'react'

import styled from 'styled-components'

// reactstrap
//import { Alert } from 'reactstrap'
  
const SecondPhotoDisplay = styled.div`

    display: flex;
    justify-content: space-evenly;
    padding: 100px;
  

`




const PhotoDisplayAgain = (props) => {
  const [data2, setData2] = useState(); 
    const { data } = props
  
  return (
    <SecondPhotoDisplay>
        <p>
            Photo of the Day Again 
        </p> 
      {data && <img src={data.url} /> }
      {data2 && <img src={data2.url}/>}

    </SecondPhotoDisplay>
  );
}

export default PhotoDisplayAgain;
