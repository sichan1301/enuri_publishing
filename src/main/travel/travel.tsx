import styled from "styled-components"
import { Container } from "../yourType/yourType"
import TravelProduct from "./travelProduct"


const Travel = () => {
  return(
    <Container>
      <h2>여행</h2>
      <TravelProductList>
        <TravelProduct />
        <TravelProduct />
        <TravelProduct />
        <TravelProduct />
      </TravelProductList>
    </Container>
  )
}

export default Travel

const TravelProductList = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;
`