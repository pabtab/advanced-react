import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
  align-items: center;
  background:#fcfcfc;
  border-top: 1px solid #e0e0ee;
  bottom: 0;
  display:flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  z-index: 100000;
`

export const Link = styled(LinkRouter)`
  align-items:center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })}
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 30px;
      line-height: 30px;
    }
  }
`
