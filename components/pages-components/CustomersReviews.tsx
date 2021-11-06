import styled from 'styled-components'
import Image from 'next/image'

interface ICustomersReviewsProps {}

export default function CustomersReviews({}: any) {
  return (
    <Container>
      <h3>Avis des clients</h3>
      <ReviewBox>
        <Customerbadge src="/images/hero_slider_01.jpg" alt="Customer" width="70" height="70" />
        <h4>Vivite Laire</h4>
        <h6>client</h6>
        <ReviewText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus voluptas dolor aspernatur animi amet.
          Incidunt, non est recusandae necessitatibus eius assumenda repellat atque. Obcaecati sunt quisquam hic aliquam
          accusantium debitis, quos, non labore sequi est fugit nostrum minus totam beatae vero porro veritatis earum commodi
          excepturi id tempora libero.
        </ReviewText>
      </ReviewBox>
    </Container>
  )
}

const Container = styled.div`
  background: url('images/map.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h3 {
    color: var(--theme-background-primary);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    text-align: center;
    margin-bottom: 1rem;
  }
`

const ReviewBox = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h4 {
    text-align: center;
    color: var(--theme-background-primary);
    font-size: var(--font-size-medium);
    margin-top: 1.5rem;
  }

  & h6 {
    color: var(--theme-background-secondary);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    text-align: center;
  }

  & p {
    text-align: justify;
    text-justify: inter-word;
    color: var(--theme-background-muted);
  }
`

const ReviewText = styled.p`
  color: var(--theme-background-muted);
`
const Customerbadge = styled(Image)`
  border-radius: 100%;
  margin: 0 auto;
`
