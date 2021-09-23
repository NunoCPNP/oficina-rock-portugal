import useTranslation from 'next-translate/useTranslation'
import { AiFillPhone, AiTwotoneMail, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

import { StyledFooter, GridContainer, GridItem, ContactsContainer } from './Footer.styles'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <StyledFooter data-testid="footer">
      <GridContainer>
        <GridItem>
          <div>
            <h4>{t(`who-we-are`)}</h4>
          </div>
          <div>
            <h4>{t(`privacy-policies`)}</h4>
          </div>
          <div>
            <h4>{t(`return-and-refund`)}</h4>
          </div>
          <div>
            <h4>{t(`faq`)}</h4>
          </div>
        </GridItem>
        <GridItem>
          <h3>{t(`contacts`)}</h3>
          <ContactsContainer>
            <div>
              <AiFillPhone />
            </div>
            <div>
              <AiTwotoneMail />
              <span>oficinarockpt@gmail.com</span>
            </div>
            <div>
              <AiFillFacebook />
              <span>oficinarockpt</span>
            </div>
            <div>
              <AiFillInstagram />
              <span>oficinarockpt</span>
            </div>
            <div>
              <AiOutlineWhatsApp />
            </div>
          </ContactsContainer>
        </GridItem>
        <GridItem>
          <h3>{t(`payment-methods`)}</h3>
        </GridItem>
        <GridItem>
          <h3>{t(`newsletter`)}</h3>
        </GridItem>
      </GridContainer>
    </StyledFooter>
  )
}

export default Footer
