import Image from 'next/image'
import PropTypes from 'prop-types'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { Collection, Container, ImageSelector, ImageThumb, SelectedImage } from './ProductDisplay.styles'

const ProductDisplay = ({ images = [], collection }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [clicked, setClicked] = useState(false)
  const { t } = useTranslation('common')

  const collectionTitle = `${t(collection.replaceAll(' ', '-').toLowerCase())}`

  return (
    <Container>
      <ImageSelector>
        {images.map((image, index) => (
          <ImageThumb key={index}>
            <Image
              src={image}
              alt=""
              width="60"
              height="80"
              onClick={() => {
                index === 1 ? setClicked(true) : setClicked(false)
                setSelectedImage(index)
              }}
              quality="75"
            />
          </ImageThumb>
        ))}
      </ImageSelector>
      <SelectedImage>
        <Image
          src={images[selectedImage]}
          alt=""
          width="315"
          height="410"
          quality="75"
          onMouseOver={() => {
            if (!clicked && images.length > 1 && selectedImage === 0) {
              setSelectedImage(1)
            }
          }}
          onMouseOut={() => !clicked && setSelectedImage(0)}
        />
        <Collection>
          <span>{t(`collection`)}</span>
          <span>{collectionTitle}</span>
        </Collection>
      </SelectedImage>
    </Container>
  )
}

ProductDisplay.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default ProductDisplay
