import React from "react";
import { TypeAnimation } from "react-type-animation";

import { HiArrowLongDown } from "react-icons/hi2";

function Section1({ scrollValue, setScrollValue }) {
	return (
		<section
			className={`content-section  ${scrollValue === 0 ? "active" : ""}`}
		>
			<div className="headerWrapper _lw">
				<h1>
					<div
						className={`first-div ${
							scrollValue === 0 ? "slide-in-up" : "slide-out-up"
						}`}
					>
						<span className="align-left">Aazaan</span>
						<TypeAnimation
							sequence={[
								"Designer", // Types 'One'
								2000, // Waits 1s
								"Model", // Deletes 'One' and types 'Two'
								2000, // Waits 2s
							]}
							wrapper="span"
							className="job-title"
							cursor={true}
							repeat={Infinity}
						/>
						{/* <span className="job-title">Designer</span> */}
					</div>
					<div
						className={`second-div ${
							scrollValue === 0
								? "slide-in-down"
								: "slide-out-down"
						}`}
					>
						<a
							className="explore-work"
							onClick={() => setScrollValue(1)}
						>
							<HiArrowLongDown className="arrow-down-icon" />
							Explore my work
						</a>
						<span className="align-right">Verma</span>
					</div>
				</h1>
			</div>

			<div className="headerWrapper _sw">
				<h1>
					<div
						className={`first-div ${
							scrollValue === 0 ? "slide-in-up" : "slide-out-up"
						}`}
					>
						<TypeAnimation
							sequence={[
								"Designer", // Types 'One'
								2000, // Waits 1s
								"Model", // Deletes 'One' and types 'Two'
								2000, // Waits 2s
							]}
							wrapper="span"
							className="job-title"
							cursor={true}
							repeat={Infinity}
						/>
						<span className="align-left">Aazaan</span>
						<span className="align-right">Verma</span>
					</div>
				</h1>
				<div
					className={`second-div ${
						scrollValue === 0 ? "slide-in-down" : "slide-out-down"
					}`}
				>
					<a
						className="explore-work"
						onClick={() => setScrollValue(1)}
					>
						<HiArrowLongDown className="arrow-down-icon" />
						Explore my work
					</a>
				</div>
			</div>
		</section>
	);
}

export default Section1;
