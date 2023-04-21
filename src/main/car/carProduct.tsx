import styled from "styled-components"

const CarProduct = () => {
  return(
    <Container>
      <Img src="image/cost.jpg"/>
      <Title>2023 제네시스 GV80</Title>
      <Spec>
        <span>준대형 SUV</span>
        <span>가솔린</span>
        <span>0cc</span>
      </Spec>
      <LowestPrice>7,368만원~</LowestPrice>
      <RentLeaseArea>
        <Brand>NH농협캐피탈</Brand>
        <Price>렌트/리스 <span>75</span>만원</Price>
      </RentLeaseArea>
    </Container>
  )
}

export default CarProduct


const Container = styled.div`
  border:0.5px solid rgb(211, 211, 211);
  padding: 15px;
`

const Img = styled.img`
  width:100%;
`

const Title =styled.div`
  font-size:16px;
  font-weight: 900;
`

const Spec =styled.div`
  margin-top:5px;
  span{
    font-size: 12px;
    margin-right:15px;
    position:relative;

    :first-child{
      position:static;
    }
    :before{
      position:absolute;
      top:2px;
      left:-10px;
      background-color:#9e9e9e;
      content:"";
      width:2px;
      height:13px;
    }
  }
`

const LowestPrice =styled.p`
  text-align: right;
  font-size: 12px;
  color:rgb(113, 113, 113);
`

const RentLeaseArea =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.div`
  font-size: 12px;
  color:rgb(186, 176, 71);
`

const Price = styled.div`
  font-size:14px;
  font-weight: 900;
  span{
    font-size: 18px;
  }
`