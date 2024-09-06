import React, {useState} from "react";
import './App.css';
import Gallery from './components/Gallery/Gallery.jsx';
import Header from './components/header/Header.jsx';

function App() {
  const [imageClicked, setImageClicked] = useState(false)

  return (
    <div className="App">
      <Header setImageClicked={setImageClicked} />
      <Gallery imageClicked={imageClicked} setImageClicked={setImageClicked} />
    </div>
  );
}

export default App;
