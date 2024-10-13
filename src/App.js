import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Section1 from "./components/Home/Section1.jsx";
import GradientBg from "./components/GradientBg/GradientBg.jsx";

function App() {
	const [imageClicked, setImageClicked] = useState(false);
	const [scrollValue, setScrollValue] = useState(0);
	const [showGallery, setShowGallery] = useState(false);
	const [galleryType, setGalleryType] = useState("");

	return (
		<div className={`App ${showGallery ? "" : "noscroll"}`}>
			<GradientBg />
			<Header
				setImageClicked={setImageClicked}
				scrollValue={scrollValue}
				setScrollValue={setScrollValue}
				setShowGallery={setShowGallery}
			/>
			{showGallery ? (
				<Gallery
					imageClicked={imageClicked}
					setImageClicked={setImageClicked}
					setShowGallery={setShowGallery}
					galleryType={galleryType}
				/>
			) : (
				<Home
					scrollValue={scrollValue}
					setScrollValue={setScrollValue}
					imageClicked={imageClicked}
					setImageClicked={setImageClicked}
					setShowGallery={setShowGallery}
					setGalleryType={setGalleryType}
				/>
			)}
		</div>
	);
}

export default App;
