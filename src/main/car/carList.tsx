import styled from "styled-components"
import CarProduct from "./carProduct"

const CarList = () => {
  return(
    <Container>
      <CarProduct />
      <CarProduct />
      <CarProduct />
    </Container>
  )
}

export default CarList


const Container =styled.div`
  width:840px;
  display:grid;
  grid-gap:10px;
  grid-template-columns: repeat(3,1fr);
`