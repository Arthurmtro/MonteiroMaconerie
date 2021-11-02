import styled from 'styled-components';

interface IHeroSliderProps {}

export default function HeroSlider({}: any) {
  return (
    <Hero>
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
              xlinkHref="https://www.lesmaconsparisiens.fr/wp-content/uploads/2019/01/les-macons-parisiens-au-travail-1024x546.jpg"
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
  );
}

const Hero = styled.div`
  overflow: hidden;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

const Rect = styled.rect`
  fill: var(--theme-background-primary);
`;
const PathPrimary = styled.path`
  fill: var(--theme-background-primary);
`;

const PathSecondary = styled.path`
  fill: var(--theme-background-secondary);
`;
