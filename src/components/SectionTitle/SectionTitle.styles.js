import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  margin-top: ${(props) => props.offset};
  margin-bottom: 4rem;
`

export const SubTitle = styled.div`
  padding-bottom: 0.2rem;
`
