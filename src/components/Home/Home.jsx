import React, { useEffect, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "./Home.css";
import Contact from "./Contact";

function Home({ scrollValue, setScrollValue, setShowGallery, setGalleryType }) {
	const [isScrolling, setIsScrolling] = useState(false); // State to manage scrolling cooldown
	const [showModellingOptions, setShowModellingOptions] = useState(false);
	const scrollThreshold = 60; // Set a threshold for scroll sensitivity

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
						return Math.min(prev + 1, 3); // Change max to 2 for the third section
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
			<Contact scrollValue={scrollValue} />
		</>
	);
}

export default Home;
