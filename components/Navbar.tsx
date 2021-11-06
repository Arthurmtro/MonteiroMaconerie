import styled from 'styled-components'
import NextLink from 'next/link'
import Image from 'next/image'

import Link from './Link'
import PlusIcon from '../icons/PlusIcon'
import MailIcon from '../icons/MailIcon'
import PhoneIcon from '../icons/PhoneIcon'
import FacebookIcon from '../icons/FacebookIcon'

export default function Navbar() {
  return (
    <Header>
      <QuickNav>
        <div>
          <ContactInfos>
            <a href="mailto:sasmonteiromaconnerie@gmail.com">
              <MailIcon /> sasmonteiromaconnerie@gmail.com
            </a>
            <a href="tel:+33682456765">
              <PhoneIcon /> 06 82 45 67 65
            </a>
          </ContactInfos>
          <SocialNetworks>
            <a href="https://www.facebook.com/sasMonteiroMaconnerie" target="_blank" rel="noreferrer">
              <FacebookIcon size={16} />
            </a>
          </SocialNetworks>
        </div>
      </QuickNav>

      <DesktopNav>
        <svg xmlns="http://www.w3.org/2000/svg" width="231.057" height="83" viewBox="0 0 231.057 83">
          <g id="Logo" transform="translate(-674.298 537)">
            <text
              id="onteiro_açonnerie"
              data-name="onteiroaçonnerie"
              transform="translate(750 -498)"
              fill="#463f32"
              fontSize="31"
              fontFamily="Rubik-Medium, Rubik"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                onteiro
              </tspan>
              <tspan x="0" y="26">
                açonnerie
              </tspan>
            </text>
            <text
              id="M"
              transform="translate(690 -537)"
              fill="#463f32"
              fontSize="70"
              fontFamily="Rubik-Medium, Rubik"
              fontWeight="500"
            >
              <tspan x="0" y="65">
                M
              </tspan>
            </text>
            <g id="casque" transform="translate(705.004 -521.114) rotate(110)">
              <path
                id="Path_9"
                data-name="Path 9"
                d="M0,0H0L1.182,7.753,2.321,10.9,4.2,13.419,6.476,15.8l2.949,2.378,3.552,1.4,3.485.56,3.485-.56,3.217-1.4L26.046,15.8l2.547-2.378L30.2,10.9l1.407-3.148L33.238,0H44.281"
                transform="translate(0 0)"
                fill="#ff0"
                stroke="#535000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Path_10"
                data-name="Path 10"
                d="M0,0C12.285,16.6,23.5,0,23.5,0"
                transform="translate(1.738 9.304)"
                fill="#ff0"
                stroke="#535000"
                strokeWidth="1"
              />
            </g>
          </g>
        </svg>

        {/* <Logo src="/images/logo.png" alt="monteiro-maconnerie logo" width="80" height="60" /> */}
        <Links>
          <li>
            <NextLink href="/">
              <>
                <span>Accueil</span>
                <div />
              </>
            </NextLink>
          </li>
          <li>
            <PlusIcon />
          </li>
          <li>
            <NextLink href="/">
              <>
                <span>Galerie</span>
                <div />
              </>
            </NextLink>
          </li>
        </Links>
        <Link text="Prendre RDV" href="/contact" />
      </DesktopNav>
    </Header>
  )
}

const Header = styled.nav`
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000; */
  background: linear-gradient(to right, var(--theme-background-secondary) 30%, #fffffb 30%);
  box-shadow: 0px 0px 25px #00000030;
`

const QuickNav = styled.div`
  padding: 0.2em 0;
  background-color: var(--theme-background-primary);

  & div {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`

const ContactInfos = styled.div`
  * {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: var(--font-size-small);
  }

  & a {
    margin-right: 1em;
  }

  & svg {
    margin-right: 0.5em;
  }
`

const SocialNetworks = styled.div`
  & a {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const DesktopNav = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`

const Links = styled.ul`
  display: flex;
  align-items: center;

  & li {
    font-size: var(--font-size-medium);
    margin: 0 1em;

    & span {
      color: var(--theme-secondary);
      cursor: pointer;
    }

    & div {
      border-bottom: 2px solid #ffffff;
      transition: all 0.4s ease-out;
      cursor: pointer;
      width: 0%;
    }

    &:hover {
      & div {
        width: 100%;
        border-bottom: 2px solid var(--theme-secondary);
      }
    }
  }
`

const Logo = styled(Image)``
