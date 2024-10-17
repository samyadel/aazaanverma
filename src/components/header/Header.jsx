import React from "react";
import "./Header.styles.css";
import logo from "../../assets/logo2.png";
import logowhite from "../../assets/logo-white.png";

function Header({
	setShowGallery,
	scrollValue,
	setScrollValue,
	setImageClicked,
}) {
	return (
		<header className="header">
			<img
				src={logowhite}
				className="logo"
				onClick={() => {
					setScrollValue(0);
					setShowGallery(false);
					setImageClicked(false);
				}}
			/>

			<ul className="headerLinks">
				<li className={scrollValue == 1 && `active`}>
					<a
						onClick={() => {
							setScrollValue(1);
							setShowGallery(false);
							setImageClicked(false);
						}}
					>
						Design
					</a>
				</li>
				<li className={scrollValue == 2 && `active`}>
					<a
						onClick={() => {
							setScrollValue(2);
							setShowGallery(false);
							setImageClicked(false);
						}}
					>
						Modelling
					</a>
				</li>
				{/* <li><a>Music</a></li> */}
				{/* <li className={scrollValue == 3 && `active`}>
          <a>About</a>
        </li> */}
				<li className={scrollValue == 3 && `active`}>
					{/* <a href="mailto:aazaanverma@gmail.com">Contact</a> */}
					<a
						onClick={() => {
							setScrollValue(3);
							setShowGallery(false);
							setImageClicked(false);
						}}
					>
						Contact
					</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
