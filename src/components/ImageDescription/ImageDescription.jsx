import React, { useState } from 'react'
import "./ImageDescription.styles.css"

function ImageDescription({image, developmentImages, imageDescription, imageTitle, client, tools}) {
    const [clickedImage, setClickedImage] = useState()

  return (
    <div>
        {clickedImage && (
            <div className="backgroundOverlay" onClick={() => setClickedImage()}>
                <img src={clickedImage} className='imagePopup' />
            </div>
        )}

        <div className='imageDescriptionWrapper'>

            <div className='imageTextWrapper'>
                <h2 className='imageHeading'>{imageTitle}</h2>
                <p style={{fontStyle: "italic"}}>Client: {client}</p>
                <p style={{fontStyle: "italic"}}>Tools used: {tools}</p>
                <p className='imageDescription'>{imageDescription}</p>
                {/* <p className='imageDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eius maiores omnis quis delectus corporis, tenetur illum reprehenderit fugiat at, dolores voluptate totam, veritatis animi est mollitia dolorem voluptas sapiente nulla aut eveniet! Doloribus iusto laudantium impedit, eum blanditiis assumenda atque repellendus facilis ad repellat accusantium fugiat, adipisci magnam? Aliquid ea sunt tenetur vel ipsam libero vero itaque quia nesciunt incidunt fugiat error eaque quisquam, nulla veniam eius. Impedit ratione numquam eveniet praesentium vero libero illo voluptatibus minus, perspiciatis, totam nulla, iste accusantium! Nesciunt suscipit expedita ratione quos quidem voluptatibus ipsam totam temporibus aut nostrum voluptatum ipsa commodi similique delectus placeat eveniet consequatur atque maiores perferendis, in, fugit accusantium. Nesciunt adipisci fugit sit hic natus nam libero consequuntur, atque dolorum?</p> */}

            </div>

            <div className='allImages'>
                <img src={image} className='largeImage' />
            </div>
        </div>

        <div className="developmentImages">
            {developmentImages.map((image) => (
                 <img src={image} className='developmentImage' onClick={() => setClickedImage(image)} />
                )
            )}
        </div>
    </div>
  )
}

export default ImageDescription