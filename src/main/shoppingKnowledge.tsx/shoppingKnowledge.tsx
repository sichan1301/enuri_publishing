import styled from "styled-components";
import Content from "./content";

const ShoppingKnowledge = () => {
  return(
    <Container>
      <div>
        <h2>쇼핑지식</h2>
        <Content />
      </div>

      <div>
        <h2>쇼핑지식 FUN파크</h2>
        <Event src = "image/cost.jpg" />
      </div>
    </Container>
  )
}

export default ShoppingKnowledge

const Container = styled.div`
  display:flex;
  width:1250px;
  margin:20px auto;
`


const Event = styled.img`
  width:100%;
  height:360px;
`