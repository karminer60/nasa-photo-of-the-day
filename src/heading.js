
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.

import React from 'react'

import styled from 'styled-components'

// reactstrap
//import { Alert } from 'reactstrap'



  
const StyledHeading = styled.div`
.topDiv {
    display: flex;
    justify-content: space-evenly;
    padding: 100px;
    background-color: red;
  }

  .photo {
    display: flex;
    justify-content: space-evenly;
  }

`

const Heading = (props) => {
    //const [data, setData] = useState(); 
      const { data } = props
  
  return (
    <StyledHeading>
        <div className="topDiv">
            <header className="top">Lambda School</header>
        
            <header className="top">
                 NASA<span role="img" aria-label='go!'>🚀</span>!
            </header> 
        </div>

        <div className="photo">
            <p>
                Photo of the Day  
            </p> 
            {data && <img src={data.url} /> }
        </div>
    </StyledHeading>
  );
}

export default Heading;

