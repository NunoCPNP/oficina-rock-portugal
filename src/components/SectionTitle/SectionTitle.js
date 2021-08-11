import { Container } from "./SectionTitle.styles";

const SectionTitle = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default SectionTitle;
