import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import {
  Container,
  ImageSelector,
  ImageThumb,
  SelectedImage,
} from "./ProductDisplay.styles";

const ProductDisplay = ({ data = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Container>
      <ImageSelector>
        {data.map((image, index) => (
          <ImageThumb key={index}>
            <Image
              src={image}
              alt=""
              width="80"
              height="80"
              onClick={() => setSelectedImage(index)}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk4OSsBwAA1gCbrc9BMAAAAABJRU5ErkJggg=="
              quality="75"
            />
          </ImageThumb>
        ))}
      </ImageSelector>
      <SelectedImage>
        <Image src={data[selectedImage]} alt="" width="395" height="410" />
      </SelectedImage>
    </Container>
  );
};

ProductDisplay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ProductDisplay;
