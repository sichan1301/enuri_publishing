import styled from "styled-components"
import { Container } from "../yourType/yourType"
import Product from "./product"

const MostPopular = () => {
  return(
    <Container>
      <h2>지금 잘 나가는 상품</h2>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </Container>
  )
}

export default MostPopular

const ProductList = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap:10px;
`
