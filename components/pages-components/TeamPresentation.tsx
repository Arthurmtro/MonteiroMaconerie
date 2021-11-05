import styled from 'styled-components'

interface ITeamPresentationProps {}

export default function TeamPresentation({}: any) {
  return (
    <Container>
      <div id="left">
        <Title>Antonio Monteiro</Title>
        <Description>
          Je vous propose un travail de qualité, qui saura satisfaire vos envies. Ensemble nous créerons un projet qui vous
          ressemble et qui vous fera aimer votre maison.
        </Description>
        <ul>
          <SkillElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
              <rect id="Object" width="15" height="15" fill="#bf6130" />
            </svg>
            j&lsquo;ai obtenu un CAP Maçonnerie
          </SkillElement>
          <SkillElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
              <rect id="Object" width="15" height="15" fill="#bf6130" />
            </svg>
            un CAP Béton Armé
          </SkillElement>
          <SkillElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
              <rect id="Object" width="15" height="15" fill="#bf6130" />
            </svg>
            un Batiment 2000 niveau H
          </SkillElement>
          <SkillElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
              <rect id="Object" width="15" height="15" fill="#bf6130" />
            </svg>
            et un BP Maçonnerie
          </SkillElement>
        </ul>

        <YearsInfos>
          <h5>30+</h5>
          <p>Ans d&lsquo;expérience</p>
          <Mutedtext>
            Réinventons ensemble vos espaces de vie et soyez en sûrs, vous vous sentirez mieux chez vous.
          </Mutedtext>
        </YearsInfos>
      </div>

      <div id="right">
        <svg xmlns="http://www.w3.org/2000/svg" width="643" height="591" viewBox="0 0 643 591">
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Bg"
                width="570"
                height="519"
                transform="translate(975 1873)"
                fill="#bf6130"
                stroke="#fffffb"
                strokeWidth="5"
              />
            </clipPath>
            <clipPath id="clip-path-2">
              <rect
                id="Bg-2"
                data-name="Bg"
                width="270"
                height="270"
                transform="translate(975 2183)"
                fill="#bf6130"
                stroke="#fffffb"
                strokeWidth="5"
              />
            </clipPath>
          </defs>
          <g id="IMG" transform="translate(-975 -1862)">
            <g id="IMG_1" transform="translate(73 -11)">
              <g id="Bg-3" data-name="Bg">
                <g id="Bg-4" data-name="Bg" transform="translate(975 1873)" fill="#bf6130" stroke="#fffffb" strokeWidth="5">
                  <rect width="570" height="519" stroke="none" />
                  <rect x="2.5" y="2.5" width="565" height="514" fill="none" />
                </g>
                <g id="Clip" clipPath="url(#clip-path)">
                  <image
                    id="Place_Your_Image_Here"
                    data-name="Place Your Image Here"
                    width="570"
                    height="519"
                    transform="translate(975 1873)"
                    xlinkHref="https://source.unsplash.com/collection/190727/1600x900"
                  />
                </g>
              </g>
            </g>
            <g id="IMG_2">
              <g id="Bg-5" data-name="Bg">
                <g id="Bg-6" data-name="Bg" transform="translate(975 2183)" fill="#bf6130" stroke="#fffffb" strokeWidth="5">
                  <rect width="270" height="270" stroke="none" />
                  <rect x="2.5" y="2.5" width="265" height="265" fill="none" />
                </g>
                <g id="Clip-2" data-name="Clip" clipPath="url(#clip-path-2)">
                  <image
                    id="Place_Your_Image_Here-2"
                    data-name="Place Your Image Here"
                    width="270"
                    height="270"
                    transform="translate(975 2183)"
                    xlinkHref="data:image/png;base64,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"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    max-width: 30rem;
    padding: 0 1rem;

    & ul {
      padding: 0.7rem 0;
    }
  }
`

const Title = styled.h3`
  color: var(--theme-primary);
  font-weight: var(--font-weight-title);
  font-size: var(--font-size-title);
  text-align: left;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: var(--theme-muted);
  font-weight: var(--font-weight-thin);
  text-align: justify;
  text-justify: inter-word;
`

const SkillElement = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2rem 0;

  & svg {
    margin-right: 1.3rem;
  }
`

const YearsInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-color: var(--theme-muted) transparent;
  height: 5rem;

  & h5 {
    color: var(--theme-background-secondary);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-medium);
    margin-right: 1rem;
  }

  & p:first-of-type {
    color: var(--theme-primary);
    font-size: var(--font-size-small);
    border-right: 1px solid var(--theme-muted);
    padding-right: 1rem;
  }
`
const Mutedtext = styled.p`
  padding-left: 1rem;
  color: var(--theme-muted);
  font-weight: var(--font-weight-thin);
  font-size: var(--font-size-small);
`
