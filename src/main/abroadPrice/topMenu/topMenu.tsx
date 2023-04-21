import styled from "styled-components"
import ProductList from "./productList"

const TopMenu = () => {
  return(
    <Container>
      <Carousel src ="image/free.jpg" />
      <ProductList />
    </Container>
  )
}

export default TopMenu


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Carousel = styled.img`
  width:410px;
  height:320px;
`