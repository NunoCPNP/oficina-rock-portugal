import useTranslation from 'next-translate/useTranslation'

import { Container, Line, Title } from './ProductDescription.styles'

const ProductDescription = ({ description }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Title>{t(`product-description`)}</Title>
      <div>
        {description.map((line, index) => (
          <Line key={index}>{t(`${line}`)}</Line>
        ))}
      </div>
    </Container>
  )
}

export default ProductDescription
