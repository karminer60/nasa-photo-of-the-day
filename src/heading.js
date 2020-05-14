
//add state for the data you'll be getting from NASA.
//Add an effect hook to handle the API call side effect.

import React from 'react'




const Heading = (props) => {
    //const [data, setData] = useState(); 
      const { data } = props
  
  return (
    <div className="Heading">
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
    </div>
  );
}

export default Heading;
