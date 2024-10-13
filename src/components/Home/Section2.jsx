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
						<h2>I'm a designer</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Voluptatibus animi quasi hic dolore, iusto
							dignissimos dolores quidem exercitationem dicta
							nesciunt! Labore nobis esse voluptates modi mollitia
							dolores illo voluptatem eum blanditiis odio
							architecto, soluta in consequuntur officia deleniti
							ratione repellat iure id aut. Dolorem natus
							provident dignissimos adipisci asperiores nisi quam
							doloribus esse vero quod quae aspernatur voluptas
							ad, dolores, tempora accusantium! Veritatis quis
							debitis delectus assumenda vitae minima qui saepe
							tenetur optio, illo incidunt hic, dignissimos illum
							cupiditate corporis? Esse enim non consectetur,
							laudantium molestiae veniam possimus. Quas obcaecati
							omnis porro quasi, velit nulla quod aut hic
							praesentium
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
