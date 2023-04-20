
import styled from "styled-components"
import { Container } from "../yourType/yourType"

import Carousel from "./carousel"
import ProductList from "./productList"
import SavingPointByBrand from "./savingPointByBrand"

const AbroadPrice = () => {
  return(
    <Container>
      <h2>해외쇼핑 가격비교</h2>
      <TopMenu>
        <Carousel />
        <ProductList />
      </TopMenu>

      <SavingPointByBrand />

    </Container>
  )
}



export default AbroadPrice


const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
