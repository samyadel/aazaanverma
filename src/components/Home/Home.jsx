import React, { useEffect, useRef, useState } from "react";
// import "./Home.css";

import abdullahStills from "../../assets/abduallahStillsImage.png";
import shiTuan from "../../assets/shiTuanDesign.png";
import unity from "../../assets/unityImage.png";

import wedding1 from "../../assets/modelling/wedding 1.png";
import DSC_0512 from "../../assets/modelling/DSC_0512.jpg";
import protectLdn1 from "../../assets/modelling/PROTECT.LDN -04.jpg";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";
import HorizontalGallery from "../HorizontalGallery/HorizontalGallery";
import ModellingGallery from "../ModellingGallery/ModellingGallery";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Home({ scrollValue, setScrollValue, setShowGallery, setGalleryType }) {
	const [isScrolling, setIsScrolling] = useState(false); // State to manage scrolling cooldown
	const [showModellingOptions, setShowModellingOptions] = useState(false);
	const scrollThreshold = 40; // Set a threshold for scroll sensitivity

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = (event) => {
			event.preventDefault(); // Prevent default scroll behavior
			const delta = event.deltaY;

			// Only respond to scroll if not in cooldown and if the delta exceeds the threshold
			if (!isScrolling && Math.abs(delta) > scrollThreshold) {
				setIsScrolling(true); // Set scrolling state to true

				// Update the scrollValue based on scroll direction
				setScrollValue((prev) => {
					if (delta > 0) {
						return Math.min(prev + 1, 2); // Change max to 2 for the third section
					} else {
						return Math.max(prev - 1, 0);
					}
				});

				// Set a timeout to prevent immediate subsequent scrolls from changing the section
				setTimeout(() => {
					setIsScrolling(false); // Reset scrolling state after timeout
					setShowModellingOptions(false);
				}, 400); // 800 ms cooldown
			}
		};

		window.addEventListener("wheel", handleScroll);

		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, [isScrolling]);

	return (
		<>
			<Section1
				scrollValue={scrollValue}
				setScrollValue={setScrollValue}
			/>
			<Section2
				scrollValue={scrollValue}
				setShowGallery={setShowGallery}
				setGalleryType={setGalleryType}
			/>
			<Section3
				scrollValue={scrollValue}
				setShowModellingOptions={setShowModellingOptions}
				showModellingOptions={showModellingOptions}
				setShowGallery={setShowGallery}
				setGalleryType={setGalleryType}
			/>
		</>
	);
}

export default Home;
