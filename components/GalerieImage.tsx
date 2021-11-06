import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'

interface IGalerieImageProps {}

export default function GalerieImage({}: any) {
  const [hover, setHover] = useState(false)

  return (
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <ImageBox hover={hover} />
      <ActionContaner hover={hover}>
        <a href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAALBJREFUOE/tlb0KwjAURs2s9CUKTjpVq1AUn9tFap38w9LFyadQ13gyCE7JJyRbC2fKzeFyf1JjrR0I35aYJdxgHYo3orRDNIEH5LGkB0QVXKHopd4KqI1KUtM9qa3gArNYjdoh2sARForUDfYQfFsw5TyDJ7QeqeHs5WoqrVQou99zJ22ETMfEjOANdyVTJYmaILfzJyhDF9SR+nb/jHAeS5pkTntp/Pc0ycv/1z/qAwxdbVOsjXrXAAAAAElFTkSuQmCC">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <g id="Group_14" data-name="Group 14" transform="translate(-1410 -3960)">
              <rect id="Bg" width="60" height="60" transform="translate(1410 3960)" fill="#bf6130" />
              <image
                id="Icon"
                width="21"
                height="21"
                transform="translate(1430 3980)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAALBJREFUOE/tlb0KwjAURs2s9CUKTjpVq1AUn9tFap38w9LFyadQ13gyCE7JJyRbC2fKzeFyf1JjrR0I35aYJdxgHYo3orRDNIEH5LGkB0QVXKHopd4KqI1KUtM9qa3gArNYjdoh2sARForUDfYQfFsw5TyDJ7QeqeHs5WoqrVQou99zJ22ETMfEjOANdyVTJYmaILfzJyhDF9SR+nb/jHAeS5pkTntp/Pc0ycv/1z/qAwxdbVOsjXrXAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
        </a>
        <p>Titre de fou malade</p>
      </ActionContaner>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const ImageBox = styled.div<{ hover: boolean }>`
  height: 100%;
  width: 100%;
  background: url('https://source.unsplash.com/500x950/?worker');
  border: 1px solid var(--theme-background-primary);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: ${({ hover }) => (hover ? 'all 0.2s ease-in-out' : 'all 0.5s ease-in-out')};
  filter: ${({ hover }) => (hover ? 'brightness(40%) grayscale(60%)' : 'none')};
  -webkit-filter: ${({ hover }) => (hover ? 'brightness(40%) grayscale(60%)' : 'none')};
`

const ActionContaner = styled.div<{ hover: boolean }>`
  transition: all 0.3s ease-in-out;
  opacity: ${({ hover }) => (hover ? '1' : '0')};

  position: relative;
  z-index: 10;
  top: -50%;
  right: -25%;

  @media only screen and (min-width: 840px) {
    top: -50%;
    right: -50%;
  }

  & svg {
    border-radius: var(--theme-border-radius);
    transition: all 0.2s ease-in-out;
    transform: ${({ hover }) => (hover ? 'scale(1)' : 'scale(0.5)')};
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  & p {
    transition: all 0.2s ease-in-out;
    padding-top: ${({ hover }) => (hover ? '5%' : '8%')};
    opacity: ${({ hover }) => (hover ? '1' : '0')};
    position: relative;
    right: 20%;
    text-transform: uppercase;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-heavy);
    color: var(--theme-primary);

    @media only screen and (min-width: 840px) {
      right: 40%;
    }
  }
`
