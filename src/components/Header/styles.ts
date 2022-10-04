import styled from "styled-components";

import logoImage from '../../assets/logo.svg'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.black900};
  padding: 1.5rem;
  border-bottom: 1px solid #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;

  *:hover {
      transition: all ease 150ms
    }

  nav {
    position: absolute;
    left: 0;

    ul {
      list-style: none;
      
      li {
        display: inline-block;
        padding: .5rem 1rem;
        border-radius: 3px;
        font-weight: 550;
        font-size: 0.875rem;
        text-transform: uppercase;

        &:hover {
          background-color: ${props => props.theme.blueBrasileiraoA};
        }
      }
    }
  }
`

export const Logo = styled.div`
  background-image: url(${logoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 9.375rem;
  height: 2rem;

  &:hover {
    opacity: 0.5;
  }
`