import Image from 'next/image'
import Link from 'next/link'
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { Container } from './LanguageSelector.styles'

const LanguageSelector = () => {
  const router = useRouter()
  const { lang } = useTranslation()

  return (
    <Container data-testid="languageselector">
      {router?.locales.map((locale) => {
        if (locale === lang) return null

        return (
          <Link key={locale} href={router.asPath} locale={locale}>
            <a
              onClick={() => {
                var expiryDate = new Date()
                expiryDate.setMonth(expiryDate.getMonth() + 1)

                cookieCutter.set('NEXT_LOCALE', locale)
              }}
            >
              <Image
                src={`/${locale}.svg`}
                alt={`Switch language to ${locale.toUpperCase()}`}
                width={15}
                height={15}
                layout="fixed"
              />
            </a>
          </Link>
        )
      })}
    </Container>
  )
}

export default LanguageSelector
