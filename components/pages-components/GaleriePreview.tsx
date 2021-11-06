import styled from 'styled-components'
import GalerieImage from '../GalerieImage'
import Link from '../Link'

interface IGaleriePreviewProps {}

export default function GaleriePreview({}: any) {
  return (
    <Container>
      <SeeMore>
        <h3>Galerie des projets</h3>
        <Link text="Voir toutes les images" />
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

  & h3 {
    color: var(--theme-primary);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    text-align: center;
    padding-right: 15rem;
  }
`

const ImagesWrapper = styled.div`
  height: 43vh;
  display: flex;
  justify-content: center;
`
