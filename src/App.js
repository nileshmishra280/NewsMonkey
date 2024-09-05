import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar.js';
import News from './Component/News.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
 const pageSize = 6;
  const [Progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={Progress}
            height={3}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="health" pageSize={ pageSize} q="tesla" />} />
            <Route path="/politics" element={<News setProgress={ setProgress} key="politics" pageSize={ pageSize} q="politics" />} />
            <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={ pageSize} q="sports" />} />
            <Route path="/music" element={<News setProgress={ setProgress} key="music" pageSize={ pageSize} q="music" />} />
            <Route path="/science" element={<News setProgress={ setProgress} key="science" pageSize={ pageSize} q="science" />} />
            <Route path="/business" element={<News setProgress={ setProgress} key="business" pageSize={ pageSize} q="business" />} />
            <Route path="/movies" element={<News setProgress={ setProgress} key="movies" pageSize={ pageSize} q="movies" />} />
            <Route path="/health" element={<News setProgress={ setProgress} key="health" pageSize={ pageSize} q="health" />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App;