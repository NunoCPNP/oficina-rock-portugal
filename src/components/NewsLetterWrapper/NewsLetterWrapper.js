import NewsLetter from '@/components/NewsLetter'

import { Container, Title } from './NewsLetterWrapper.styles'

const NewsLetterWrapper = () => {
  return (
    <Container>
      <Title>
        Subscribe to get <span>Oficina Rock</span> news & promotions
      </Title>
      <NewsLetter />
    </Container>
  )
}

export default NewsLetterWrapper
