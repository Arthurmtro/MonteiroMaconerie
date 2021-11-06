import styled from 'styled-components'
import Image from 'next/image'
import NextLink from 'next/link'

import Link from './Link'
import FacebookIcon from '../icons/FacebookIcon'
import PlusIcon from '../icons/PlusIcon'
import GpsIcon from '../icons/GpsIcon'

export default function Footer({}: any) {
  const quickLinks = [
    { label: 'Accueil', link: '/' },
    { label: 'Presentation Rapide', link: '/#presentation-rapide' },
    { label: 'Presentation Equipe', link: '/#presentation-equipe' },
    { label: 'Previsualisation galerie', link: '/#previsualisation-galerie' },
    { label: 'Avis clients', link: '/#avis-clients' },
    { label: 'Galerie', link: '/galerie' },
    { label: 'Contact', link: '/contact' },
  ]

  return (
    <Container>
      <TopSection>
        <h3>Prennez rendez-vous !</h3>
        <Link text="Prendre rdv" />
      </TopSection>
      <LinksSection>
        <About>
          <h5>A propos</h5>
          <p>
            Je vous propose un travail de qualité, qui saura satisfaire vos envies. Ensemble nous créerons un projet qui vous
            ressemble et qui vous fera aimer votre maison.
          </p>
        </About>
        <UsefullLinks>
          <h5>Infos utiles</h5>
          {quickLinks.map(({ label, link }, key) => (
            <NextLink key={key} href={link}>
              <Anchor>
                <PlusIcon />
                {label}
              </Anchor>
            </NextLink>
          ))}
        </UsefullLinks>
        <LocationInfos>
          <p>
            20 Rue de la Bellière, <br /> 49410 Mauges sur Loire
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.599345362342!2d-1.0196623843780013!3d47.36121967916921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480619ff0c76ba49%3A0x556e5eb07c21917b!2sSas%20Monteiro%20ma%C3%A7onnerie!5e0!3m2!1sen!2sfr!4v1636220778880!5m2!1sen!2sfr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </LocationInfos>
      </LinksSection>
      <CopyrightSection>
        <div>
          <Image src="/images/logo.png" alt="logo monteiro maconnerie" width={58} height={62} />
          <h4>
            Copyright © 2021{' '}
            <a href="https://www.mtro.fr" target="_blank" rel="noreferrer">
              Monteiro Arthur.
            </a>{' '}
            Tous droits réservés.
          </h4>
          <FacebookIcon size={32} rounded />
        </div>
      </CopyrightSection>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: var(--theme-background-primary);
  overflow: hidden;
`

const TopSection = styled.section`
  width: 60rem;
  padding: 0 1rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 840px) {
    flex-direction: row;
  }

  & h3 {
    color: var(--theme-primary);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    text-align: center;
    padding-right: 0;

    @media only screen and (min-width: 840px) {
      padding-right: 15rem;
    }
  }

  padding-bottom: 2rem;
  border-bottom: 1px solid var(--theme-muted);
`

const About = styled.section`
  & p {
    color: var(--theme-muted);
    font-weight: var(--font-weight-thin);
    text-align: justify;
    text-justify: inter-word;
  }
`

const LinksSection = styled.section`
  width: 60rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & section {
    width: 15rem;
  }

  @media only screen and (min-width: 840px) {
    flex-direction: row;
    padding: 0 1rem;
  }
`

const UsefullLinks = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 2rem 0;

  @media only screen and (min-width: 840px) {
    margin: 3rem 0;
  }
`

const Anchor = styled.a`
  cursor: pointer;
  font-weight: var(--font-weight-thin);

  & svg {
    margin-right: 1.5rem;
  }
`

const CopyrightSection = styled.section`
  background-color: var(--theme-background-secondary);
  width: 100vw;
  font-size: var(--font-size-small);
  & a {
    color: var(--theme-background-primary);
    font-weight: var(--font-weight-heavy);
  }

  & span {
    display: none;

    @media only screen and (min-width: 840px) {
      display: block;
    }
  }

  & div {
    margin: 0 auto;
    height: 4rem;
    max-width: 60rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
      display: none;

      @media only screen and (min-width: 840px) {
        display: block;
      }
    }
  }
`

const Logo = styled(Image)``
const LocationInfos = styled.h4`
  margin: 0 auto;
  color: var(--theme-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-normal);
  text-align: center;

  & h4 {
    text-align: left;
  }
`
