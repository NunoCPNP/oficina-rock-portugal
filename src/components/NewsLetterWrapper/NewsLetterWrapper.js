import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import NewsLetter from '@/components/NewsLetter'

import { Container, SubTitle, Title } from './NewsLetterWrapper.styles'

const NewsLetterWrapper = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Title>{t(`first-to-know`)}</Title>
      <SubTitle>
        <Trans
          i18nKey="subscribe-newsletter"
          components={{
            a: <div />,
            b: <span />,
          }}
        />
      </SubTitle>
      <NewsLetter />
    </Container>
  )
}

export default NewsLetterWrapper
