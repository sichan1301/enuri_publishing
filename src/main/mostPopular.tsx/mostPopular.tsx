import styled from "styled-components"
import { Container } from "../yourType/yourType"
import Product from "./product"

const MostPopular = () => {
  return(
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
  )
}

export default MostPopular


const ProductList = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap:10px;
`
