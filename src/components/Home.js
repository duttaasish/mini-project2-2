import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MyImage1 from "./worldmap.jpeg";
import MyImage2 from "./language.jpeg";
import Countryapi from "./Countryapi";
import Translate from "./Translate";

function Home() {
  return (
    <BrowserRouter> {/* would usually put this at a higher level in index.js or App.js, but works here too */}
      <div className="mainDiv">
        <div className="homeMainDiv">
          <Link to="/countryapi">
            <img className="homeImg" src={MyImage1} alt="World Map" />
          </Link>
          <Link to="/translate">
            <img className="homeImg" src={MyImage2} alt="World Map" />{" "}
          </Link>
        </div>
        <div className="headingDiv">
          <span>Country API</span>
          <span>Translate Language</span>
        </div>
      </div>

      <Routes>
        <Route exact path="/countryapi" element={<Countryapi />} /> {/* would probably choose better names such as CountryList and TextTranslation, but this is fine */}
        <Route exact path="/translate" element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
