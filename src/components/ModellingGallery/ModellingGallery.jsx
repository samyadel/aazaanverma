import React, { useState } from "react";
import "./ModellingGallery.css";
import "../Home/Home.css";

import Evasion1 from "../../assets/modelling/evasion/Evasion1.jpg";
import Evasion2 from "../../assets/modelling/evasion/Evasion2.jpg";
import Evasion3 from "../../assets/modelling/evasion/Evasion3.jpg";
import Evasion4 from "../../assets/modelling/evasion/Evasion4.jpg";
import Evasion5 from "../../assets/modelling/evasion/Evasion5.jpg";
import Evasion6 from "../../assets/modelling/evasion/Evasion6.jpg";
import Evasion7 from "../../assets/modelling/evasion/Evasion7.jpg";
import Evasion8 from "../../assets/modelling/evasion/Evasion8.jpg";
import Evasion9 from "../../assets/modelling/evasion/Evasion9.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ModellingGallery() {
	const [displayedWork, setDisplayedWork] = useState("");

	const images = [
		Evasion1,
		Evasion2,
		Evasion3,
		Evasion4,
		Evasion5,
		Evasion6,
		Evasion7,
		Evasion8,
		Evasion9,
	];

	return (
		<section className="modellingGallerySection">
			<div
				className={`modelling-projects-wrapper content-section info-section ${
					displayedWork ? "slide-out-down" : "slide-in-up active"
				}`}
			>
				<div
					id="protectLdn"
					onClick={() => setDisplayedWork("protectLdn")}
				>
					<h2>Protect Ldn</h2>
				</div>

				<div id="Wedding" onClick={() => setDisplayedWork("wedding")}>
					<h2>Wedding</h2>
				</div>

				<div id="evasion" onClick={() => setDisplayedWork("evasion")}>
					<h2>Evasion</h2>
				</div>
			</div>

			<div
				className={`modellingWork content-section info-section ${
					displayedWork ? "slide-in-up active" : "slide-out-down"
				}`}
			>
				<div className="modellingImagesScrollWrapper">
					<img src={Evasion1} />
				</div>

				<div className="textWrapper">
					<h2>Protect LDN</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi quidem laudantium aperiam sunt adipisci recusandae, et veritatis itaque quisquam quam, blanditiis nisi! Quod ut adipisci obcaecati saepe ipsa similique sunt voluptatum non aspernatur nulla quidem voluptate praesentium, natus incidunt neque, excepturi eos aperiam quo, beatae voluptatibus eum magnam qui quam iure! Aperiam sapiente possimus quibusdam voluptates quo quod similique hic officia modi, repudiandae, temporibus inventore laudantium! Excepturi debitis minus ea mollitia quibusdam adipisci fugiat, reprehenderit perspiciatis. Obcaecati magnam voluptate, quas autem laudantium ipsam fuga nulla aliquam reprehenderit veniam asperiores, libero sit eum, quod eius. Consequuntur distinctio explicabo aliquam quas itaque deserunt, reprehenderit enim, laborum numquam sunt, officia exercitationem ea laboriosam aperiam ratione. Aliquam possimus repellat, quo harum maxime molestias est blanditiis qui. Magnam facilis explicabo nobis eligendi autem aliquid ipsam amet ratione nemo repellendus delectus quaerat nostrum, consequuntur iusto deleniti natus commodi alias quis repudiandae obcaecati quod asperiores! Quisquam, eaque. Illo fuga ut omnis obcaecati quam tempore iste deleniti, facilis quo praesentium? Explicabo vel itaque ex dignissimos nam beatae laborum! Et distinctio pariatur inventore dicta autem maiores, eaque a?</p>
				</div>
			</div>
		</section>
	);
}

export default ModellingGallery;
