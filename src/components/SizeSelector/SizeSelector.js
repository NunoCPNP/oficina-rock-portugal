import { Container, Size } from "./SizeSelector.styles";

const SizeSelector = ({ data }) => {
  console.log("SIZESELECTOR DATA: ", data);

  return (
    <Container>
      {data.map((size) => (
        <Size key={size.size} quantity={size.quantity}>
          {size.size}
        </Size>
      ))}
    </Container>
  );
};

export default SizeSelector;
