import React from 'react';
import Utama from './Component/utama';
import {Link} from 'react-router-dom';
import './nyoba.css'

class App extends React.Component {
  render(){
    return(
      <div> <hr />
        <Link to="/">Beranda</Link>
        <Link to="/galerry">Gallery</Link>
        <Link to="/haribesar">HariBesar</Link>
        <hr />
        <p><Utama /></p>
      </div>
    )
  }

}

export default App;