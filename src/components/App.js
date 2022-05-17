import React, { useState, useCallback } from "react";
import "./app.scss";
//import MyImage from "../images/doanle.jpg";


import LayoutOld from "./LayoutOld";
import LayoutNew from "./LayoutNew";

const App = () => {
  const [versionCv, setVerionCv] = useState(false);
  const handleSelectVersionCv = useCallback(
    () => setVerionCv((versionCv) => !versionCv),
    []
  );

  const handlePrint = useCallback(() => {
    console.log("Print");
    window.print();
    // mywindow.close();
    return true;
  }, []);

  return (
    <div id="container">
      <div className="action_bar">
        <span className="hide_when_print">Change Layout</span>
        <button
          className="button_top"
          id="btn_change_version_cv"
          onClick={handleSelectVersionCv}
          title={`Change from ${versionCv ? "new" : 'old'} to ${versionCv ? 'old' : 'new'}`}
        >
          {versionCv ? "New" : "Old"}
        </button>
        <button className="button_top" id="btn_print" onClick={handlePrint}>
          Print
        </button>
      </div>
      {versionCv ? <LayoutNew/> : <LayoutOld/>}
    </div>
  );
};

export default App;
