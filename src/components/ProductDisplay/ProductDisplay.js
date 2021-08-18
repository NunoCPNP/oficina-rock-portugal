import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import {
  Container,
  ImageSelector,
  ImageThumb,
  SelectedImage,
} from "./ProductDisplay.styles";

const ProductDisplay = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Container>
      <ImageSelector>
        {images.map((image, index) => (
          <ImageThumb key={index}>
            <Image
              src={image}
              alt=""
              width="80"
              height="80"
              onClick={() => setSelectedImage(index)}
              quality="75"
              selected={index === selectedImage}
            />
          </ImageThumb>
        ))}
      </ImageSelector>
      <SelectedImage>
        <Image
          src={images[selectedImage]}
          alt=""
          width="395"
          height="410"
          quality="75"
        />
      </SelectedImage>
    </Container>
  );
};

ProductDisplay.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ProductDisplay;
