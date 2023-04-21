import styled from "styled-components"
import TravelProduct from "./travelProduct"

const TravelList = () => {
  return(
    <Container>
      <TravelProduct />
      <TravelProduct />
      <TravelProduct />
      <TravelProduct />
    </Container>
  )
}

export default TravelList


const Container =styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;
`