import styled from "styled-components"
import Product from "./product"

const ProductList = () => {
  return(
    <Container>
      <Product imgWidth="300px" imgHeight="170px" flexDirection="column" categoryDisplay />
      <Grid>
        <Product imgWidth="130px" imgHeight="130px" flexDirection="row" />
        <Product imgWidth="130px" imgHeight="130px" flexDirection="row" />
        <Product imgWidth="130px" imgHeight="130px" flexDirection="row" />
        <Product imgWidth="130px" imgHeight="130px" flexDirection="row" />
      </Grid>
    </Container>
  )
}


export default ProductList

const Container = styled.div`
  display:flex;
`
const Grid = styled.div`
  margin: 0 10px;
  display:grid;
  grid-template-columns: repeat(2,1fr);
`