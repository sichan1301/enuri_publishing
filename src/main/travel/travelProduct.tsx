import styled from "styled-components"

const TravelProduct = () => {
  return(
    <Container>
      <Img src="image/free.jpg" />
      <Company>모두투어</Company>
      <Spec>[모/두/픽] 출발확정 多보는 꽉찬 북유럽 4국 9일 5성카타르항공/ 인솔자동반/ 베르겐</Spec>
      <Price>3,499,000원</Price>
    </Container>
  )
}

export default TravelProduct

const Container = styled.div`
  
`

const Img = styled.img`
  width:100%;
  height:300px;
`

const Company = styled.p`
  font-size: 12px;
  color:rgb(190,190,190);
`

const Spec = styled.p`
  font-size: 14px;
`

const Price = styled.p`
  font-size: 18px;
  font-weight: 900;
`