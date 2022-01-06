import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;

  ${mq('m')} {
    flex-direction: column;
  }
`

export const ImageSelector = styled.div`
  display: flex;
  flex-direction: column;

  ${mq('m')} {
    padding-bottom: 2rem;
    margin: 0 auto;
    flex-direction: row;
  }
`

export const ImageThumb = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;

  img {
    border-radius: 0.5rem;
  }
`

export const SelectedImage = styled.div`
  margin-left: 2rem;

  img {
    border-radius: 0.5rem;
  }

  ${mq('m')} {
    margin: 0 auto;
  }
`
export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 2rem;

  span:last-child {
    margin-top: 0.5rem;
    color: var(--snow);
    background-color: var(--darkLiver);
    padding: 0.2rem 1rem;
  }
`
