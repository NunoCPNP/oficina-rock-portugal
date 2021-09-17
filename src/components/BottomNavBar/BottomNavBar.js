import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import LanguageSelector from '../LanguageSelector'

import useAuth from '@/hooks/useAuth'

import { StyledNavigation, LinkContainer } from './BottomNavBar.styles'

const BottomNavBar = () => {
  // TODO -> Band List Page

  const { t } = useTranslation('common')
  const { user } = useAuth()

  const hi = t(`hi`)

  return (
    <StyledNavigation>
      {user && <div>{user.displayName ? `${hi}, ${user.displayName} !` : `${hi}`}</div>}
      <LinkContainer>
        <ul>
          {/* 
          <li>
            <Link href="/bands">{t(`bands`)}</Link>
          </li> 
          */}
          <li>
            <Link href="/men">{t(`men`)}</Link>
          </li>
          <li>
            <Link href="/women">{t(`women`)}</Link>
          </li>
          <li>
            <Link href="/accessories">{t(`accessories`)}</Link>
          </li>
          <li>
            <Link href="/promotions">{t(`promotions`)}</Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </LinkContainer>
    </StyledNavigation>
  )
}

export default BottomNavBar
