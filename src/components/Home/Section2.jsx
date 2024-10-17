import React from "react";
import "./Section2.styles.css";
import HorizontalGallery from "../HorizontalGallery/HorizontalGallery";

import abdullahStills from "../../assets/abduallahStillsImage.png";
import shiTuan from "../../assets/shiTuanDesign.png";
import unity from "../../assets/unityImage.png";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Section2({ scrollValue, setShowGallery, setGalleryType }) {
	return (
		<section
			className={`content-section ${scrollValue === 1 ? "active" : ""}`}
		>
			<section className="info-section">
				<div
					className={`text-wrapper ${
						scrollValue === 1 ? "slide-in-down" : "slide-out-down"
					}`}
				>
					<div>
						<h2>Designer</h2>
						<p>
							2 years in the game, 10+ learning. I craft visuals
							that speak louder than words. Whether it’s branding,
							digital design, or something in between, every
							project is built to make an impact.
						</p>
					</div>

					<button
						className="seeAllBtn"
						onClick={() => {
							setGalleryType("design");
							setShowGallery(true);
						}}
					>
						<FaRegArrowAltCircleRight className="arrow-icon" />
						<a href="#">See my work</a>
					</button>
				</div>

				<div
					className={`preview-wrapper ${
						scrollValue === 1 ? "slide-in-up" : "slide-out-down"
					}`}
				>
					<div className="mini-gallery">
						<img src={abdullahStills} />
						<img src={shiTuan} />
						<img src={unity} />
					</div>
				</div>
			</section>

			{/* <div
				className={`gallery-wrapper ${
					scrollValue === 1 && showGallery
						? "slide-in-up"
						: "slide-out-down"
				}`}
			>
				<HorizontalGallery />
			</div> */}
		</section>
	);
}

export default Section2;
