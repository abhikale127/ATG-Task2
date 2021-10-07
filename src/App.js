import React from "react";
import Views from "./Components/Views";
import Mobile from "./Components/Mobile";
import Images from "./Components/Images";
import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function App() {
  const matches = useMediaQuery("(max-width:420px)");
  return (
    <div className="App">
      {matches ? (
        <Mobile />
      ) : (
        <>
          <Images />
          <Views />
        </>
      )}
    </div>
  );
}
