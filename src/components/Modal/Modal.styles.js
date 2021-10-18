import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--highestLevel);
  background-color: var(--snow);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border: 1px solid var(--ghostWhite);
  padding: 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`

export const InnerContainer = styled.div`
  padding: 3rem;
`
