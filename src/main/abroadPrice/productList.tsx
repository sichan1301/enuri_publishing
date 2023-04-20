import styled from "styled-components"
import AbroadProduct from "./abroadProduct"


const ProductList = () => {
  return(
    <Container>
      <AbroadProduct />
      <AbroadProduct />
      <AbroadProduct />
      <AbroadProduct />
    </Container>
  )
}



export default ProductList

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap:10px;
`