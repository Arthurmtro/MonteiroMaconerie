import styled from 'styled-components'

interface IQuickOverviewProps {}

export default function QuickOverview({}: any) {
  return (
    <QuickOverviewWrapper>
      <h3>Ce que je vous propose</h3>
      <Container>
        <div>
          <Title>Terasse</Title>
          <Description>Réhabilitation et création de terrasse</Description>
          <svg width="80" height="80" viewBox="0 0 80 80">
            <g id="Icon" transform="translate(-520 -1553)">
              <rect id="bg" width="80" height="80" transform="translate(520 1553)" fill="#bf6130" />
              <image
                id="Icon-2"
                data-name="Icon"
                width="45"
                height="49"
                transform="translate(538 1569)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAxCAYAAABODiB6AAAABHNCSVQICAgIfAhkiAAACDNJREFUaEPN2XWsJVkRBnAGC+6ug7s7YWGCewgEJ7jD4hb0AcF3g7sN7r6Le3BnF9fBncUdhu/3OPVybk933/se94+t5Ev37T59urpO1VdV5+7av3//MdYkZ8g8nw7ONDLfH3PtkcHT1vGuXWtU+hpR6N3BN4LvBbs6Ba+V888Hlzy6KX37KPTi4GLBlwbK/S6//xWc6uim9EYUelRw0eDLA+W+2K731t+x/qu4x1kz+1OD5wXvnXnTa3LvZoHxPxyMe2d+c5FlSr82Y74V8P9JWaa0oOKjJ2wz3DFHLlByipzcJrhtcOF28fg5/m3wxkPy+/7Bv4OXBC8LPt6NOX3OPxict117YI6eGZU5pSn8zeAEwd2DOwX89dFN8Xvm+KBu1jfkfG/AqkM5TVP6pjlaCfKZ4A7tXAwcK7hvcJXgum3up4xpPaX0aTP4+wGrXadT5D05v3o3kVXgxxRelTsvkLH3Dhihl6vmxwfaBUxz8fYRB9DkmNKW6EPB6doXHz6Y/Fn5fc1miTePWaJdO3aOGGNKrOTe4IzB9YNvDwZyn8u393CVLaOMKe3hcwYCB++uIpb2asGNgssGF+weEpSSzmEBA/xmlQnbmJ/naNUvHXy2nhtT+na5KVheF2CDOWHNhwdcpJevNOVOnON5ggpkY14VPCz4wZK5rea7Ahbn47h+U6Z8miKPDV4UDH2vnjURmjtR8NPgSe0lw2U2Xoo/KLhHO7r2kPbMmO64Hreb9ywB1tmSOfZAbbKcD3jcYGYvfEK7ZjWsyqpyqQx8eSB23hLccPCglaHwX4MLNcUXhswpLRH8J/hzwJolj8jJY4JPBqz923aDXz8xuHbw5AAXvzE4W/DKQILqxe/7BBKWuqWk3JNRHjp4ZvPnnNLPyP2Dgz4gb5LfrCqwBFwJHmYdbkC4lqz2y+DU7Rpe3hOwYImPfHDQu+Fx8/tHgeMpA4ZbkCmlj9cm/3qO529P4Oy/BMrMkw0mK8Z5bq7fLZCMnAtIQciqTw8wACboBavIBVcOUC3B2e8LfDgDLMiU0uWzeJIbkLcH1wtYmKVLbp0TroDyZLZfBZcLPhVYegocM7DUYuMGwdu6593D59ysrwJR48nbs93wafc4KqNYyBIRk1HmI8GehRn+V5sIHjEgTSt6ZEgfuxGcpN3zmATx0eBKgzm4IXe8cSAOSH2kYLRiW8LSip5zBIqW3YE0e+eg52k8TAFFvBRbwkro6AvBJQJ1Bf9kXeKewC2m+XHOJYvjdHM4raBngPO1e+baF1D49cF3A8//gtLlj/08f28v/li7KKtJtxiiF8nlnwH/62sSGZXfm/v33QP1rrESVd3Br8WT9xPBiyIXdKO0JftqoHoT7b8OuIJzUlYQJCYdyp9y4R+BFVsm3oVlFENDKRfpA9IYXoBFsBBqPLiUlrarTBxOtjsXVHzKxL4UrXFY4q7BWJvVz6WyU7EJ3FeMKF1pG/toOMaEfx9RSnN+QTAm2EJQSQRoayhiQbpV3EgkwwbAeJYVC1YQp4/JZXIR48yld9R4WCkt2iWOMeFTfOsBwaETYwTu8wPZ817Bq5vyXMuy18dK3RqLMUGTnwis5mjxn+uy7eGruIdoZ8VnNoUm3rm5UgoowVr1SjGA+LjijMLmVFPjb27KXcdEyXtkKS3LKWJQCgWxhZ6tRAAVrU0p7brCXgquGDlXzjWqKFO9MieV0Kzs59rA3TmiUoZTIvjwgyj9jpygq0okNbGCvjqTI3IuCFjxgFqg00T9/IdAcErlZw/w61QQ9x8hm14k6OlQDX3SwZduBqJruFGAnDkQTKKbpTWZ5C6BiJbG1QpTgsut1rMDjW8pLRbExJTIvqizz7g+wIdILC9t8/4kx6Omag/Bcu6gvtoqIPzvBJZ83UpXRVk1i/kFtgDnFj/rXzildJWg9jT4OqkyUr27d0LrnVi64sCulI6lhBsqmqq03boxV0/zGz6l0ioxiczHhfaNKL4Tpavg4kqSGNGW6fpvEWCkBZlT2m7SC4Oen7kMziYyYL2kJt2O0lxPxXeF4FaBhpdwB757ZFC7VisrrcVChQr/vpsuJlENfm1ghO0qrY5WKfZbaWWsScaZs3TtdPY7TGoHNYTtq7EN8u0o7XuVoT68D3DV4YcD7KGxeP/AMJM9okJeQU9BkU2qNlCH6GjGZLtKm0Pal+ZBfUOssixqBXYHC3skY5auLtmGyuM7zfAoN2GJvkbulS9/HPK0ecw3JawpJ/T7ed6jTFbP8O0txceUrmK8T71leXsU9irmBOu8IJCQBC7OX5Zc5AHKaSqqCfAsZhGwCxv1Uz4tktGNJRPhbwpkJi4zJxoJHbTsqS4ud/HMRuD+lLA0i6s4vf+tgYS2J1CybslcIFKYvxGN7rLOhKKsa+8NA7ASkfo3AjW1WkZNMyUYo9K97twzB+z5LfsngIvYTNFVsPiU1K6QOvqWE4O4jH3BqWaiHtNHany5xNamYz/nMqWNtQWgcpsSlR++XWU11BD2vcf+4qj5+fDsBv0qSs/ou3lrT6DplXqfs2Rw9YnD5nXZOxbur0Pp+2VG7NAX716iEMIG+7o3VuumelMi7EjWoXQVN7VdJr3bnBGAxP6d3SLMUH3gXKW49EPWoXR16ywuMdWenw4f9ypvq35Bh2hvuCpLFe0HrEPp2hqrfWxso/auBsLWmI6EH+NdW72y3Y5lHUp7+c0DdIerNcYbQdXHmMUfRJSVnGwD+C9lx7IupSmg27bZWCIxqBR7+jJm+KfStpVfp9Je7l8DWwE6G9u5mgS7Tyo21pea/2/5Lz3AgqfY340xAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
        </div>
        <div>
          <Title>Neuf</Title>
          <Description>Construction de pavillon, maison et agrandissements</Description>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
            <g id="Icon" transform="translate(-920 -1553)">
              <rect id="bg" width="80" height="80" transform="translate(920 1553)" fill="#bf6130" />
              <image
                id="Icon-2"
                data-name="Icon"
                width="45"
                height="49"
                transform="translate(937 1569)"
                xlinkHref="data:image/png;base64,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"
              />
            </g>
          </svg>
        </div>
        <div>
          <Title>Renovation</Title>
          <Description>Ouvertures, dallages, mur de clôture ou encore démolition !</Description>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
            <g id="Icon" transform="translate(-1320 -1553)">
              <rect id="bg" width="80" height="80" transform="translate(1320 1553)" fill="#bf6130" />
              <image
                id="Icon-2"
                data-name="Icon"
                width="48"
                height="46"
                transform="translate(1337 1571)"
                xlinkHref="data:image/png;base64,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"
              />
            </g>
          </svg>
        </div>
      </Container>
    </QuickOverviewWrapper>
  )
}

const QuickOverviewWrapper = styled.div`
  & h3 {
    color: var(--theme-background-primary);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    text-align: center;
    margin-bottom: 1rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 840px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: var(--theme-background-primary);
    margin: 0.5rem auto;
    padding: 2rem 2rem 0 2rem;
    border-radius: var(--theme-border-radius);
    max-width: 20rem;
    min-height: 15rem;
    transition: all 0.2s ease-in;

    @media only screen and (min-width: 840px) {
      margin: 0 1rem;
      max-width: 20rem;
      min-height: 17rem;
    }

    &:hover {
      transform: scale(1.025);
    }
  }

  & div:not(div:nth-child(2)) {
    background-color: var(--theme-background-muted);
  }
`

const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-weight: var(--font-weight-heavy);
  color: var(--theme-primary);
`
const Description = styled.p`
  color: var(--theme-muted);
  font-weight: var(--font-weight-thin);

  text-align: justify;
  text-justify: inter-word;
`
