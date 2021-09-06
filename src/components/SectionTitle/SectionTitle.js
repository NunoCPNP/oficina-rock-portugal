import { Container, SubTitle } from './SectionTitle.styles'

const SectionTitle = ({ title, section, offset, sub }) => {
  return (
    <Container offset={offset} sub={sub}>
      {section && <SubTitle>{section}</SubTitle>}
      {sub ? <h3>{title}</h3> : <h2>{title}</h2>}
    </Container>
  )
}

export default SectionTitle
