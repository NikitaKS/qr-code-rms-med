import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/main/MainPage";

function App() {
  return (
    <div className="App">
        <Route path={['/registration/token=:token','/registration/']} render={()=><MainPage/>}/>
    </div>
  );
}

export default App;
