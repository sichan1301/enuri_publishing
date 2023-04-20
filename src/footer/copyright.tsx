import styled from "styled-components"
import { Container } from "../main/yourType/yourType"

const CopyRightArea = () => {
  return(
    <Container>
      <Duty>㈜써머스플랫폼은 통신판매 정보제공자로서 통신판매의 거래당사자가 아니며, 상품의 주문/배송/환불에 대한 의무와 책임은 각 쇼핑몰(판매자)에게 있습니다.</Duty>
      <CopyRight>Copyright ⓒ SummercePlatform Inc. All rights reserved.</CopyRight>
    </Container>
  )
}

export default CopyRightArea


const Duty = styled.p`
  font-size:12px;
  color:rgb(134, 134, 134);
`

const CopyRight = styled.p`
  font-size:12px;
  color:rgb(79, 79, 79);
`