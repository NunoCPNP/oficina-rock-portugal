import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import { Container } from './Band.styles'

const Band = ({ band }) => {
  const { t } = useTranslation('common')

  return <Container></Container>
}

Band.propTypes = {
  band: PropTypes.string.isRequired,
}

export default Band
