import styled from 'styled-components'
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
        <ImageBox />
        <ImageBox />
      </ImagesWrapper>
      <ImagesWrapper>
        <ImageBox />
        <ImageBox />
      </ImagesWrapper>
    </Container>
  )
}

const Container = styled.div`
  min-width: 100%;
  max-height: 60vh;
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

const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  background: url('https://source.unsplash.com/500x950/?worker');
  border: 1px solid var(--theme-background-primary);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    filter: brightness(40%) grayscale(60%);
    -webkit-filter: brightness(40%) grayscale(60%);
  }
`
