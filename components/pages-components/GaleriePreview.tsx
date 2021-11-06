import styled from 'styled-components'
import GalerieImage from '../GalerieImage'
import Link from '../Link'

interface IGaleriePreviewProps {}

export default function GaleriePreview({}: any) {
  return (
    <Container>
      <SeeMore>
        <h3>Galerie des projets</h3>
        <Link text="Voir toutesla galerie" />
      </SeeMore>
      <ImagesWrapper>
        <GalerieImage />
        <GalerieImage />
      </ImagesWrapper>
      <ImagesWrapper>
        <GalerieImage />
        <GalerieImage />
      </ImagesWrapper>
    </Container>
  )
}

const Container = styled.article`
  min-width: 100%;
  max-height: 100%;
`

const SeeMore = styled.div`
  margin: 0 auto 1.5rem auto;
  max-width: 50rem;
  display: flex;
  justify-content: center;
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
    padding: 2rem 0;

    @media only screen and (min-width: 840px) {
      padding: 0;
      padding-right: 15rem;
    }
  }
`

const ImagesWrapper = styled.div`
  height: 43vh;
  display: flex;
  justify-content: center;
`
