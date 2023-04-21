import styled from "styled-components"

const BrandPoint = () => {
  return(
    <Container>
      <div />
      <p>머니 0.5% 적립</p>
    </Container>
  )
}

export default BrandPoint


const Container = styled.div`
  width:calc(100%/6);
  border:0.5px solid rgb(226, 226, 226);
  div{
    height:50px;
    background:url(image/cost.jpg) no-repeat center center/contain;
  }

  p{
    color:rgb(3, 94, 205);
    font-size:14px;
    text-align: center;
  }
`