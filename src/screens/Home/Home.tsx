import React from 'react'
import Head from './components/Head';
import "./home.css"
import Flexer from './../../components/Flexer';
import Uploader from './components/Uploader';
import Linker from './components/Linker';

function Home(){
    return (
      <div className="container">
        <div className="Home">
          <Head />
          <Flexer>
            <Uploader />
          </Flexer>
        </div>
      </div>
    );
}

export default Home
