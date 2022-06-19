import Home from "./Home/Home";
import React, {useEffect} from "react";
import NavBar from './NavBar/NavBar'
import VenderProfile from "./Vender/VenderProfile"

function App() {
  navigator.geolocation.getCurrentPosition((p)=>{
    localStorage.setItem("posList", JSON.stringify([p.coords.longitude, p.coords.latitude]))
  }, () => console.log("falied to get current location"))
  
  return (
    <>
      {/* <Home /> */}
    <VenderProfile />
    </>
  );
}

export default App;
