import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'

import { shimmer } from '@/utils/shimmer'
import { toBase64 } from '@/utils/toBase64'

import { Container, DescriptionContainer, ImageContainer } from './ProductCard.styles'

const ProductCard = ({ type, title, band, images, category, id }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <ImageContainer>
        <Image
          src={images[0]}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 245))}`}
          alt={`${type} ${band} ${title}`}
          width="200"
          height="245"
          quality="75"
        />
      </ImageContainer>
      <DescriptionContainer>
        <span>{type}</span>
        <h3>{band}</h3>
        <h4>{title}</h4>
      </DescriptionContainer>
      <CustomButton type="button" inverted>
        <Link href={`/${category}/${id}`}>{t(`select`)}</Link>
      </CustomButton>
    </Container>
  )
}

ProductCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default ProductCard
