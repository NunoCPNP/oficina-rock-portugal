import { Container } from "./ProductCard.styles";

const ProductCard = ({ title, band, images }) => {
  return (
    <Container>
      <div>{band}</div>
      <div>{title}</div>
    </Container>
  );
};

export default ProductCard;
