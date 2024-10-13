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
						<h2>I'm a model</h2>
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
