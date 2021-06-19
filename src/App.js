import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
     <Row 
        title="NETFLIX ORIGINAL" 
        fetchUrl={requests.fetchNetflixOriginal} 
        isLargeRow
      />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
