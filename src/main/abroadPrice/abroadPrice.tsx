import { Container } from "../yourType/yourType"
import SavingPointByBrand from "./pointByBrand/pointByBrand"
import TopMenu from "./topMenu/topMenu"

const AbroadPrice = () => {
  return(
    <Container>
      <h2>해외쇼핑 가격비교</h2>
      <TopMenu />
      <SavingPointByBrand />
    </Container>
  )
}



export default AbroadPrice
