import { Container, Title, SubTitle } from "./styles"

interface HighlightProps {
  title: string
  subTitle: string
}

export const Highlight = ({ title, subTitle }: HighlightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}