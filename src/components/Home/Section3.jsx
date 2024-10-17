import React from "react";
import wedding1 from "../../assets/modelling/wedding 1.png";
import DSC_0512 from "../../assets/modelling/DSC_0512.jpg";
import protectLdn1 from "../../assets/modelling/PROTECT.LDN -04.jpg";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Section3({
	scrollValue,
	setShowModellingOptions,
	showModellingOptions,
	setShowGallery,
	setGalleryType,
}) {
	return (
		<section
			className={`content-section ${
				scrollValue === 2 && !showModellingOptions ? "active" : ""
			} ${showModellingOptions && "slide-out-down"}`}
		>
			<section className="info-section">
				<div
					className={`text-wrapper ${
						scrollValue === 2 ? "slide-in-down" : "slide-out-up"
					}`}
				>
					<div>
						<h2>Model</h2>
						<p>
							Stepping into the frame with intention and purpose.
							Whether for clothing brands or editorials, each
							shoot unfolds a story and unveils hidden layers.
							Capturing not just the memory of a moment, but the
							essence beneath it.
						</p>
					</div>

					<button
						className="seeAllBtn"
						onClick={() => {
							setGalleryType("modelling");
							setShowGallery(true);
						}}
					>
						<FaRegArrowAltCircleRight className="arrow-icon" />
						<a href="#">See my work</a>
					</button>
				</div>

				<div
					className={`preview-wrapper ${
						scrollValue === 2 ? "slide-in-up" : "slide-out-down"
					}`}
				>
					<div className="mini-gallery">
						<img src={wedding1} />
						<img src={DSC_0512} />
						<img src={protectLdn1} />
					</div>
				</div>
			</section>
		</section>
	);
}

export default Section3;
