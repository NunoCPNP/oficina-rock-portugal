import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  z-index: var(--highestLevel);
  background-color: var(--darkLiver);
  color: var(--snow);
  position: fixed;
  bottom: -5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem 7.6rem 3rem;
`

export const TextContainer = styled.div`
  text-transform: uppercase;
  font-size: 1.7rem;
`

export const ButtonContainer = styled.div`
  padding-left: 4rem;
`
