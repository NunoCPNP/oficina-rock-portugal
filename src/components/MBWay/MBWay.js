import useTranslation from 'next-translate/useTranslation'

import CustomButton from '../CustomButton'

import { ButtonContainer, Container, Info, Title } from './MBWay.styles'

const MBWay = ({ unsetMbWay }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Title>{t(`mb-way-payment`)}</Title>
      <Info>{t(`mb-way-unavailable`)}</Info>
      <ButtonContainer>
        <CustomButton onClick={() => unsetMbWay()}>Voltar</CustomButton>
      </ButtonContainer>
    </Container>
  )
}

export default MBWay
