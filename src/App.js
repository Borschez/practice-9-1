import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import './App.css'

import { getIssues, updateIssue } from './api/github.api'

export default function App() {
  const [data, setData] = useState([]);  
  useEffect(() => {
    getIssues("all").then(json => setData(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header">GitHub Issues</header>      
      <div id="content">        
        <Board data={data} updateItem={updateIssue} />
      </div>
    </div>
  );
}