import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'

import { Container, ImageContainer, InfoContainer } from './Maintenece.styles'

const Maintenece = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="Oficina Rock Portugal" />
      <Container>
        <ImageContainer>
          <Image src="/logo.webp" alt="Oficina Rock PT Logo" height={57} width={395} />
        </ImageContainer>
        <InfoContainer>{t(`soon`)}</InfoContainer>
      </Container>
    </>
  )
}

export default Maintenece
