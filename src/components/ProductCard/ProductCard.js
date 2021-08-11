import Image from "next/image";
import PropTypes from "prop-types";

import {
  Container,
  ImageContainer,
  DescriptionContainer,
} from "./ProductCard.styles";

const ProductCard = ({ type, title, band, images }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={images[0]}
          alt={`${type} ${band} ${title}`}
          width="290"
          height="300"
        />
      </ImageContainer>
      <DescriptionContainer>
        <span>{type}</span>
        <h3>{band}</h3>
        <h4>{title}</h4>
      </DescriptionContainer>
    </Container>
  );
};

ProductCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ProductCard;
