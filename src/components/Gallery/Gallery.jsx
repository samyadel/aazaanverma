import React, { useState } from "react";
import "./Gallery.styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageDescription from "../ImageDescription/ImageDescription";
import BounceLoader from "react-spinners/BounceLoader";
import designImages from "./designImages";
import modellingImages from "./modellingImages";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const override = {
	display: "block",
	margin: "auto",
	borderColor: "red",
};

const Gallery = ({ imageClicked, setImageClicked, galleryType }) => {
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedDevelopmentImages, setSelectedDevelopmentImages] = useState(
		[]
	);
	const [selectedImageDescription, setSelectedImageDescription] =
		useState("");
	const [selectedImageTitle, setSelectedImageTitle] = useState("");
	const [selectedImageTools, setSelectedImageTools] = useState("");
	const [selectedImageClient, setSelectedImageClient] = useState("");

	const [openLightbox, setOpenLightbox] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);

	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 800);

	return (
		<div style={{ width: "90%", margin: "0 auto" }}>
			{imageClicked ? (
				<ImageDescription
					tools={selectedImageTools}
					client={selectedImageClient}
					image={selectedImage}
					developmentImages={selectedDevelopmentImages}
					imageDescription={selectedImageDescription}
					imageTitle={selectedImageTitle}
					setImageClicked={setImageClicked}
				/>
			) : (
				<div>
					{loading && (
						<div className="wrapper">
							<BounceLoader
								color={"red"}
								loading={true}
								cssOverride={override}
								size={150}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						</div>
					)}
					<div style={{ display: loading ? "none" : "block" }}>
						{galleryType === "design" && (
							<a
								href="#"
								style={{
									width: "100%",
									textAlign: "left",
									display: "block",
									marginBottom: "20px",
									fontStyle: "italic",
									textDecoration: "underline",
								}}
							>
								Download PDF version
							</a>
						)}
						<ResponsiveMasonry
							columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
						>
							<Masonry gutter="20px">
								{galleryType === "design" &&
									designImages.map((image, i) => (
										<div
											className="imageWrapper"
											key={i}
											onClick={() => {
												setSelectedDevelopmentImages(
													image.developmentImages
												);
												setSelectedImage(image.src);
												setSelectedImageDescription(
													image.description
												);
												setSelectedImageTitle(
													image.title
												);
												setSelectedImageTools(
													image.tools
												);
												setSelectedImageClient(
													image.client
												);

												setImageClicked(true);
											}}
										>
											<div className="imageOverlay"></div>
											<img
												src={image.src}
												className="galleryItem"
											/>
											<p className="imageTitle">
												{image.title}
											</p>
										</div>
									))}

								{galleryType === "modelling" &&
									modellingImages.map((image, i) => (
										<div
											className="imageWrapper"
											key={i}
											onClick={() => {
												setImageIndex(i);
												setOpenLightbox(true);
											}}
										>
											<div className="imageOverlay"></div>
											<img
												src={image.src}
												className="galleryItem"
											/>
											<p className="imageTitle">
												{image.title}
											</p>
										</div>
									))}
							</Masonry>
						</ResponsiveMasonry>

						{openLightbox && (
							<Lightbox
								open={openLightbox}
								close={() => setOpenLightbox(false)}
								index={imageIndex}
								slides={modellingImages.map((image) => {
									return {
										src: image.src,
									};
								})}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
