import { motion } from 'framer-motion'
import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled(motion.div)`
  background-color: var(--darkLiver);
  color: var(--snow);
  position: fixed;
  top: 0;
  bottom: 0;
  right: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 9rem 4rem 4rem;
`

export const CartContainer = styled.div`
  padding-top: 14rem;
  display: inherit;
  justify-content: center;

  ${mq('s')} {
    padding-top: 22rem;
  }
`

export const ButtonContainer = styled.div`
  display: inherit;
  justify-content: center;
`

export const TotalContainer = styled.div`
  text-align: end;
  padding-top: 2rem;
`
