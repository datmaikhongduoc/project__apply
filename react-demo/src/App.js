
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import DefaultLayout from "./components/DefaultLayout";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";



function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
    <DefaultLayout/>
     {/* <div className="App" style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
    </>
        
  );
}

export default App;
