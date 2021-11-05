import styled from 'styled-components'

import Button from '../components/Link'

interface IHeroSliderProps {
  idToGo: string
}

// TODO: ADD slider animation on hover (slide ease-in)

export default function HeroSlider({ idToGo }: IHeroSliderProps) {
  return (
    <Hero>
      <HeroText>
        <Quote>Bienvenue</Quote>
        <Title>
          sas monteiro
          <br /> maconnerie
        </Title>
        <Description>Maconnerie des mauges, dans le 49 et 44 represente</Description>
        <Button text="En voir plus" href={`#${idToGo}`} />
      </HeroText>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1988.984"
        height="900"
        viewBox="0 0 1988.984 900"
      >
        <defs>
          <clipPath id="clip-path">
            <Rect id="Bg" width="1182.87" height="900" transform="translate(0 145)" />
          </clipPath>
          <clipPath id="clip-path-2">
            <PathPrimary id="Bg-2" data-name="Bg" d="M1175,145h805.88l8.1,900H996.639Z" />
          </clipPath>
        </defs>
        <g id="IMG" transform="translate(0 -145)">
          <Rect id="Bg-4" data-name="Bg" width="1182.87" height="900" transform="translate(0 145)" />
          <g id="Clip" clipPath="url(#clip-path)">
            <Rect id="Overlay" width="1182.87" height="900" transform="translate(0 145)" opacity="0.949" />
            <PathSecondary
              id="Overlay-2"
              data-name="Overlay"
              d="M1133.2,94.008l49.674,9.832L985.79,1099.511l-49.674-9.832Z"
              fill="#bf6130"
            />
          </g>
          <PathPrimary id="Bg-6" data-name="Bg" d="M1175,145h805.88l8.1,900H996.639Z" />
          <g id="Clip-2" data-name="Clip" clipPath="url(#clip-path-2)">
            <image
              id="img"
              data-name="Hero slide image"
              width={1024 * 1.7}
              height={546 * 1.7}
              transform="translate(550 145)"
              xlinkHref="/images/hero_slider_01.jpg"
            />
            <PathSecondary
              id="Overlay-3"
              data-name="Overlay"
              d="M609.485,732.557,1082.249,513.5l262,565.451L871.484,1298.008Z"
              fill="#bf6130"
              opacity="0.6"
            />
            <PathSecondary
              id="Overlay-4"
              data-name="Overlay"
              d="M549.485,732.557,1022.249,513.5l262,565.451L811.484,1298.008Z"
              fill="#bf6130"
              opacity="0.702"
            />
          </g>
        </g>
      </svg>
    </Hero>
  )
}

const Hero = styled.div`
  & svg {
    z-index: -10;
    height: 90%;
    width: 100%;
  }
`

const HeroText = styled.div`
  position: absolute;
  top: 35vh;
  left: calc(50vw - 30em);
`

const Quote = styled.blockquote`
  color: var(--theme-background-secondary);
  border-left: 3px solid var(--theme-background-secondary);
  padding-left: 10px;
  font-size: var(--font-size-medium);
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: var(--font-weight-title);
  font-size: var(--font-size-hero);
  margin-left: 0.3em;
`

const Description = styled.h4`
  font-weight: 200;
  font-size: var(--font-size-small);
  margin-bottom: 2em;
`

const Rect = styled.rect`
  fill: var(--theme-background-primary);
`
const PathPrimary = styled.path`
  fill: var(--theme-background-primary);
`

const PathSecondary = styled.path`
  fill: var(--theme-background-secondary);
`
