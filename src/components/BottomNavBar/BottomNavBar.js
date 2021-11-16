import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import LanguageSelector from '../LanguageSelector'

import useAuth from '@/hooks/useAuth'

import { LinkContainer, StyledNavigation, UserName } from './BottomNavBar.styles'

const BottomNavBar = () => {
  const { t } = useTranslation('common')
  const { user } = useAuth()

  const hi = t(`hi`)

  return (
    <StyledNavigation>
      <UserName user={user}>{user && <>{user.displayName ? `${hi}, ${user.displayName} !` : `${hi}`}</>}</UserName>
      <LinkContainer>
        <ul>
          <li>
            <Link href="/men">{t(`men`)}</Link>
          </li>
          <li>
            <Link href="/women">{t(`women`)}</Link>
          </li>
          {/* 
          TODO : Add accessories category
          <li> 
            <Link href="/accessories">{t(`accessories`)}</Link>
          </li> 
          
          TODO : Add promotions category
          <li>
            <Link href="/promotions">{t(`promotions`)}</Link>
          </li>
          */}
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </LinkContainer>
    </StyledNavigation>
  )
}

export default BottomNavBar
