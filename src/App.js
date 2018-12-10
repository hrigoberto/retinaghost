import React from 'react';
import Gallery from 'react-photo-gallery';
import PHOTO_SET from './photoSet';

const App = () => {
  return (
    <div>
      <div className="ui container" style={{ background: "black", margin: "60px"}}>
        <div className="ui segment" style={{background: "black"}}>
          <h1 className="ui center aligned header" style={{color : "white"}}>
            RETINA GHOST
          </h1>
        </div>
        <Gallery photos={PHOTO_SET} direction="column" margin="3"/>
      </div>
    </div>
  )
}

export default App;
