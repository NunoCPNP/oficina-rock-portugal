import useTranslation from 'next-translate/useTranslation'

import CustomButton from '../CustomButton'

import { ButtonContainer, Container, Info, Title } from './MBWay.styles'

const MBWay = ({ unsetMbWay }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Title>Pagamento com MB Way</Title>
      <Info>Lamentamos mas ainda não é possivel o pagamento com MBWay.</Info>
      <ButtonContainer>
        <CustomButton onClick={() => unsetMbWay()}>Voltar</CustomButton>
      </ButtonContainer>
    </Container>
  )
}

export default MBWay
