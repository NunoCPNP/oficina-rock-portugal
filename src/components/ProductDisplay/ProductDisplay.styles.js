import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`

export const ImageSelector = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageThumb = styled.div`
  margin-bottom: 1rem;

  img {
    border-radius: 0.5rem;
  }
`

export const SelectedImage = styled.div`
  margin-left: 2rem;

  img {
    border-radius: 0.5rem;
  }
`
