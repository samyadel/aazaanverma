import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Contact.css";

function Contact({ scrollValue }) {
	return (
		<section
			className={`content-section ${scrollValue === 3 ? "active" : ""}`}
		>
			<section className="info-section">
				<div
					className={`text-wrapper ${
						scrollValue === 3 ? "slide-in-down" : "slide-out-up"
					}`}
					style={{ alignItems: "center", width: "100%" }}
				>
					<h2>Contact Me</h2>

					<div className="contact-info-wrapper">
						<a
							href="mailto:aazaanverma@gmail.com"
							style={{
								fontStyle: "italic",
								textDecoration: "underline",
							}}
						>
							aazaanverma@gmail.com
						</a>

						<a
							href="https://www.linkedin.com/in/aazaan-verma-00b520295"
							target="_blank"
						>
							<FaLinkedin className="socials-logo" /> Aazaan Verma
						</a>

						<a
							href="https://www.instagram.com/_aazaanv/profilecard/?"
							target="_blank"
						>
							<FaInstagram className="socials-logo" /> @_aazaanv
						</a>

						<a
							href="https://www.tiktok.com/@_aazaan"
							target="_blank"
						>
							<FaTiktok className="socials-logo" /> @_aazaan
						</a>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Contact;
