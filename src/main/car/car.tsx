import styled from "styled-components"
import Carousel from "../abroadPrice/carousel"
import { Container } from "../yourType/yourType"
import CarProduct from "./carProduct"

const Car = () => {
  return(
    <Container>
      <h2>자동차</h2>
        <Inner>
          <Carousel />
          <CarList>
            <CarProduct />
            <CarProduct />
            <CarProduct />
          </CarList>
        </Inner>
    </Container>
  )
}


export default Car

export const Inner = styled(Container)`
  display:flex;
`

const CarList = styled.div`
  width:840px;
  display:grid;
  grid-template-columns: repeat(3,1fr);
`