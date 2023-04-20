import styled from "styled-components"
import Category from "./category"
import ProductList from "./productList"

const Content = () => {
  return(
    <Container>
      <div>
        <Category />
        <ProductList />
      </div>
      
      <Right src = "image/free.jpg" />
    </Container>   
  )
}


export default Content 


const Container = styled.div`
  display: flex;
`

const Right = styled.img`
  width:310px;
  height:330px;
`