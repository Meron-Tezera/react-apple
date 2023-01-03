import Header from "./Component/Header";
import Alert from "./Component/Alert";
import First from "./Component/First";
import Second from "./Component/Second";
import Third from "./Component/Third";
import Fourth from "./Component/Fourth";
import Fifth from "./Component/Fifth";
import Sixth from "./Component/Sixth";
import Footer from "./Component/Footer";

import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import React from "react"
import YouTube from "./Component/YouTube/YouTube";
import News from "./Component/AppleNews/News";

function App() {
  return (

    <React.StrictMode>
      <Header />,
      <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <YouTube />
      <News />
      <Footer />
    </React.StrictMode> 

  );
}





export default App;
