import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import PropTypes from "prop-types";

import CustomButton from "@/components/CustomButton";

import {
  Container,
  ImageContainer,
  DescriptionContainer,
} from "./ProductCard.styles";

const ProductCard = ({ type, title, band, images, category, id }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <ImageContainer>
        <Image
          src={images[0]}
          alt={`${type} ${band} ${title}`}
          width="234"
          height="245"
          quality="75"
        />
      </ImageContainer>
      <DescriptionContainer>
        <span>{type}</span>
        <h3>{band}</h3>
        <h4>{title}</h4>
      </DescriptionContainer>
      <CustomButton type="button" inverted>
        <Link href={`/${category}/${id}`}>
          {t(`select`)}
        </Link>
      </CustomButton>
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
