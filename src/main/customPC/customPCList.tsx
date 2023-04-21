import styled from "styled-components"
import Product from "./product"

const CustomPCList = () => {
  return(
    <Container>
      <Product containerWidth ="25%" imgHeight="210px"/>
      <Product containerWidth ="25%" imgHeight="210px"/>
      <Product containerWidth ="25%" imgHeight="210px"/>
      <Product containerWidth ="25%" imgHeight="210px"/>
    </Container>
  )
}

export default CustomPCList 

const Container = styled.div`
  display:flex;
  gap:15px;
`