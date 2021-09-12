import useTranslation from 'next-translate/useTranslation'

import { StyledFooter, GridContainer, GridItem } from './Footer.styles'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <StyledFooter data-testid="footer">
      <GridContainer>
        <GridItem>
          <div>
            <h4>Quem Somos</h4>
          </div>
          <div>
            <h4>Políticas de Privacidade</h4>
          </div>
          <div>
            <h4>Políticas de Devolução e Reembolso</h4>
          </div>
          <div>
            <h4>Trocas e Devoluções</h4>
          </div>
          <div>
            <h4>Dúvidas Frequentes</h4>
          </div>
        </GridItem>
        <GridItem>
          <h3>Contactos</h3>
        </GridItem>
        <GridItem>
          <h3>Métodos de Pagamento</h3>
        </GridItem>
        <GridItem>
          <h3>Newsletter</h3>
        </GridItem>
      </GridContainer>
    </StyledFooter>
  )
}

export default Footer
