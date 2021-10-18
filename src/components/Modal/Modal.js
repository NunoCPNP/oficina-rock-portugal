import { AiOutlineClose } from 'react-icons/ai'

import { Container, InnerContainer, Wrapper } from './Modal.styles'

const Modal = ({ children, close }) => {
  return (
    <Container>
      <Wrapper>
        <AiOutlineClose onClick={() => close()} />
      </Wrapper>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  )
}

export default Modal
