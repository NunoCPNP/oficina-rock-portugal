import { css } from '@emotion/react'
import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

const subColor = 'grey'

const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.2rem;
  color: var(--richBlack);
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 4.5rem 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  ${mq('s')} {
    width: 95%;
  }
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`
