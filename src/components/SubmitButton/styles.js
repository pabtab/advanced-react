import styled from 'styled-components'

export const Button = styled.button`
border-radius: 3px;
background: green;
color: #fff;
height: 32px;
display: block;
width: 100%;
text-align: center;

&[disabled] {
  opacity: .3;
}
`
