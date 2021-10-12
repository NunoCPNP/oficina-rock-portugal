import { useRef, useState } from 'react'
import { GiResize } from 'react-icons/gi'
import useTranslation from 'next-translate/useTranslation'

import Measurements from '@/components/Measurements'
import Modal from '@/components/Modal'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import { Container } from './SizeGuide.styles'

const SizeGuide = () => {
  const ref = useRef()
  const { t } = useTranslation('common')
  const [openSizeGuide, setOpenSizeGuide] = useState(false)

  useOnClickOutside(ref, () => setOpenSizeGuide(false))

  return (
    <>
      <Container>
        <GiResize />
        <div>
          <a onClick={() => setOpenSizeGuide(true)}>{t(`size-guide`)}</a>
        </div>
      </Container>
      {openSizeGuide && (
        <div ref={ref}>
          <Modal>
            <Measurements />
          </Modal>
        </div>
      )}
    </>
  )
}

export default SizeGuide
