const { default: NewsLetter } = require('../NewsLetter')
const { default: SectionTitle } = require('../SectionTitle')

import { Container } from './NewsLetterWrapper.styles'

const NewsLetterWrapper = () => {
  return (
    <Container>
      <SectionTitle title="Newsletter Subscription" offset="4rem" />
      <NewsLetter />
    </Container>
  )
}

export default NewsLetterWrapper
