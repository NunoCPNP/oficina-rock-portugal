import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { AiFillPhone, AiTwotoneMail, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'

import Copyright from '../Copyright'

import { StyledFooter, GridContainer, GridItem, ContactsContainer, MethodsContainer } from './Footer.styles'

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
              <AiOutlineWhatsApp />
              <span>+351 964 631 183</span>
            </div>
            <div>
              <AiTwotoneMail />
              <span>oficinarockpt@gmail.com</span>
            </div>
            <div>
              <AiFillFacebook />
              <AiFillInstagram />
              <span>oficinarockpt</span>
            </div>
            <div>
              <SiTiktok />
              <span>oficinarockpt</span>
            </div>
          </ContactsContainer>
        </GridItem>
        <GridItem>
          <h3>{t(`payment-methods`)}</h3>
          <MethodsContainer>
            <div>
              <Image src="/payment_methods.png" alt={t(`payment-methods`)} width={254} height={40} />
            </div>
          </MethodsContainer>
        </GridItem>
        <GridItem>
          <h3>{t(`newsletter`)}</h3>
        </GridItem>
      </GridContainer>
      <Copyright />
    </StyledFooter>
  )
}

export default Footer
