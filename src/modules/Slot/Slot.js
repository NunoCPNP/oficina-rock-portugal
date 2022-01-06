import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { Container, Section } from './Slot.styles'

const Slot = () => {
  const [item, setItem] = useState(0)
  const { t } = useTranslation('common')

  const content = [t(`slot-0`), t(`slot-1`)]
  const timer = 10000

  useEffect(() => {
    setTimeout(() => {
      setItem(item < content.length - 1 ? item + 1 : 0)
    }, timer)
  }, [content.length, item, timer])

  return (
    <Container>
      <Section>{content[item]}</Section>
    </Container>
  )
}

export default Slot
