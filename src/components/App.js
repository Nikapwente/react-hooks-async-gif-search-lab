import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// key xytyEwjK2j9RNhK7WdhNvficSpOO2fqG
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
      
    </div>
  );
}

export default App;
