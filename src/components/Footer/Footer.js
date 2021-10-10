import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiOutlineWhatsApp, AiTwotoneMail } from 'react-icons/ai'
import Image from 'next/image'
import { SiTiktok } from 'react-icons/si'
import useTranslation from 'next-translate/useTranslation'

import Copyright from '../Copyright'

import { ContactsContainer, GridContainer, GridItem, MethodsContainer, Spacer, StyledFooter } from './Footer.styles'

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
          <Spacer />
        </GridItem>
        <GridItem>
          <h3>{t(`contacts`)}</h3>
          <ContactsContainer>
            <div>
              <AiFillPhone data-testid="react-icon" />
              <AiOutlineWhatsApp data-testid="react-icon" />
              <span>+351 964 631 183</span>
            </div>
            <div>
              <AiFillFacebook data-testid="react-icon" />
              <AiFillInstagram data-testid="react-icon" />
              <span>oficinarockpt</span>
            </div>
            <div>
              <AiTwotoneMail data-testid="react-icon" />
              <span>oficinarockpt@gmail.com</span>
            </div>
            <div>
              <SiTiktok data-testid="react-icon" />
              <span>oficinarockpt</span>
            </div>
          </ContactsContainer>
          <Spacer />
        </GridItem>
        <GridItem>
          <h3>{t(`payment-methods`)}</h3>
          <MethodsContainer>
            <div>
              <Image src="/payment_methods.png" alt={t(`payment-methods`)} width={160} height={35} />
            </div>
          </MethodsContainer>
          <Spacer />
        </GridItem>
        <GridItem>
          <h3>{t(`newsletter`)}</h3>
          <Spacer />
        </GridItem>
      </GridContainer>
      <Copyright />
    </StyledFooter>
  )
}

export default Footer
