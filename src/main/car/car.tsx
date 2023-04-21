import styled from "styled-components"
import { Container } from "../yourType/yourType"
import CarList from "./carList"

const Car = () => {
  return(
    <Container>
      <h2>자동차</h2>
        <Inner>
          <Carousel src ="image/free.jpg" />
          <CarList />
        </Inner>
    </Container>
  )
}


export default Car

export const Inner = styled(Container)`
  display:flex;
`


const Carousel = styled.img`
  width:410px;
  height:320px;
`