import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiOutlineWhatsApp, AiTwotoneMail } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import { SiTiktok } from 'react-icons/si'
import useTranslation from 'next-translate/useTranslation'

import Copyright from '@/components/Copyright'

import {
  ContactsContainer,
  GridContainer,
  GridItem,
  Item,
  MethodsContainer,
  Spacer,
  StyledFooter,
} from './Footer.styles'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <StyledFooter data-testid="footer">
      <GridContainer>
        <GridItem>
          <Item>
            <Link href="/whoweare" passHref>
              <h4>{t(`who-we-are`)}</h4>
            </Link>
          </Item>
          <Item>
            <Link href="/privacypolicy" passHref>
              <h4>{t(`privacy-policies`)}</h4>
            </Link>
          </Item>
          <Item>
            <Link href="/returnpolicy" passHref>
              <h4>{t(`shipping-and-exchanges`)}</h4>
            </Link>
          </Item>
          {/* <Item>
            <Link href="/faq" passHref>
              <h4>{t(`faq`)}</h4>
            </Link>
          </Item> */}
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
