import styled from "styled-components"
import { Container } from "../yourType/yourType"
import Product from "./product"

const CustomPC = () => {
  return(
    <Container>
      <h2>조립PC 추천상품</h2>
      <NormalPC>표준 PC</NormalPC>
      <ProductList>
        <Product containerWidth ="25%" imgHeight="210px" />
        <Product containerWidth ="25%" imgHeight="210px"/>
        <Product containerWidth ="25%" imgHeight="210px"/>
        <Product containerWidth ="25%" imgHeight="210px"/>
      </ProductList>
    </Container>
  )
}

export default CustomPC


const NormalPC = styled.span`
  color:#fff;
  padding:5px 20px;
  border-radius:10px;
  background-color: rgb(72, 175, 179);
  font-size:14px;
`

const ProductList = styled.div`
  display:flex;
  gap:15px;
`