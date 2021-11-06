import styled from 'styled-components'
import Image from 'next/image'
import NextLink from 'next/link'

import Link from './Link'
import FacebookIcon from '../icons/FacebookIcon'
import PlusIcon from '../icons/PlusIcon'

export default function Footer({}: any) {
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
          <NextLink href="/">
            <Anchor>
              <PlusIcon />
              Accueil
            </Anchor>
          </NextLink>
          <NextLink href="/#presentation-rapide">
            <Anchor>
              <PlusIcon />
              Presentation Rapide
            </Anchor>
          </NextLink>
          <NextLink href="/#presentation-equipe">
            <Anchor>
              <PlusIcon />
              Presentation Equipe
            </Anchor>
          </NextLink>
          <NextLink href="/#previsualisation-galerie">
            <Anchor>
              <PlusIcon />
              Previsualisation galerie
            </Anchor>
          </NextLink>
          <NextLink href="/#avis-clients">
            <Anchor>
              <PlusIcon />
              Avis clients
            </Anchor>
          </NextLink>
        </UsefullLinks>
        <section>
          <h5>Galerie</h5>
        </section>
      </LinksSection>
      <CopyrightSection>
        <div>
          <Image src="/images/logo.png" alt="logo monteiro maconnerie" width={58} height={62} />
          <p>Copyright © 2021 Monteiro Arthur. Tous droits réservés.</p>
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

  & h3 {
    color: var(--theme-primary);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    text-align: center;
    padding-right: 15rem;
  }

  padding-bottom: 2rem;
  border-bottom: 1px solid var(--theme-muted);
`

const LinksSection = styled.section`
  width: 60rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & section {
    width: 15rem;
  }
`

const About = styled.section`
  & p {
    color: var(--theme-muted);
    font-weight: var(--font-weight-thin);
    text-align: justify;
    text-justify: inter-word;
  }
`

const UsefullLinks = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 3rem 0;
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

  & div {
    margin: 0 auto;
    height: 4rem;
    max-width: 60rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
