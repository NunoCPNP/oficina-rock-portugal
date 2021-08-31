import { Container, SubTitle } from './SectionTitle.styles'

const SectionTitle = ({ title, section, offset }) => {
  return (
    <Container offset={offset}>
      {section && <SubTitle>{section}</SubTitle>}
      <h2>{title}</h2>
    </Container>
  )
}

export default SectionTitle
