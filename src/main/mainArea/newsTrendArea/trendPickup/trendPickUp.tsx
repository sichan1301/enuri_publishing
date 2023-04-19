import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const TrendPickUp = () => {
  return(
    <Container>
      <Img src="image/cost.jpg" />
      <TrendPickUpList>
        <header>
          <h3>트랜드픽업</h3>
          <span>1/10</span>
          <Icon icon = {faChevronLeft} />
          <Icon icon = {faChevronRight} />
        </header>
        <ul>
          <li>녹십초 건강식품 기획전</li>
          <li>그래픽카드는 Nvidia!</li>
          <li>로지텍 시그니처 특별기획</li>
          <li>뉴퍼마켓 IT 리포트</li>
          <li>트윈보스 S9 PRO 마스터!</li>
          <li>갤럭시북3 울트라!</li>
          <li>갤럭시탭S8 파격 할인!</li>
          <li>음식물처리기로 해결해봄!</li>
          <li>티몬 LG전자 브랜드위크</li>
        </ul>
      </TrendPickUpList>
    </Container>
  )
}

export default TrendPickUp

const Container = styled.div`
  display:flex;
`

const Img = styled.img`
  width:440px;
  height:100%;
  border:1px solid rgb(178, 178, 178);
`

const TrendPickUpList = styled.ul`

  header{
    color:#fff;
    padding:12px;
    h3{
      margin:0;
    }
    background-color: rgb(178, 178, 178);
    display:flex;
    justify-content:space-around;
    align-items: center;
    span{
      padding:5px 10px;
      border:0.5px solid rgb(233, 228, 228);
      border-radius:20px;
    }
  }

  ul{
    li{
      padding:15px;
      border-bottom:0.5px solid rgb(178, 178, 178);
      font-size:12px;
    }
  }
`


const Icon = styled(FontAwesomeIcon)`
  color: #d7d7d7;
  font-size: 15px;
  cursor: pointer;
  margin: 0;
`;