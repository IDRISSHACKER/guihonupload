import React from 'react'
import Head from './components/Head';
import "./home.css"
import Flexer from './../../components/Flexer';
import Uploader from './components/Uploader';
import mediaUpload from "./components/mediaUpload.svg"

function Home(){
    return (
      <>
        <Head />
        <div className="container">
          <div className="Home">
            <Flexer>
              <Uploader />
              <div>
                <img
                  src={mediaUpload}
                  alt="upload to gihon"
                  style={{ width: "500px" }}
                />
              </div>
            </Flexer>
          </div>
        </div>
      </>
    );
}

export default Home
