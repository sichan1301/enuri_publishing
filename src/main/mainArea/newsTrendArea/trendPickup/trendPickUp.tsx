import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const TrendPickUp = () => {
  return(
    <Container>
      <Img src="image/cost.jpg" />

      <TrendPickUpList>
        
        <Header>
          <h3>트랜드픽업</h3>
          <span>1/10</span>
          <Icon icon = {faChevronLeft} />
          <Icon icon = {faChevronRight} />
        </Header>

        <ul>
          <List as="a" href="">녹십초 건강식품 기획전</List>
          <List as="a" href="">그래픽카드는 Nvidia!</List>
          <List as="a" href="">로지텍 시그니처 특별기획</List>
          <List as="a" href="">뉴퍼마켓 IT 리포트</List>
          <List as="a" href="">트윈보스 S9 PRO 마스터!</List>
          <List as="a" href="">갤럭시북3 울트라!</List>
          <List as="a" href="">갤럭시탭S8 파격 할인!</List>
          <List as="a" href="">음식물처리기로 해결해봄!</List>
          <List as="a" href="">티몬 LG전자 브랜드위크</List>
        </ul>


      </TrendPickUpList>
    </Container>
  )
}

export default TrendPickUp

const Container = styled.div`
  display:flex;
  width:570px;
`

const Img = styled.img`
  width:70%;
  height:100%;
  border:1px solid rgb(178, 178, 178);
  cursor:pointer;
`

const TrendPickUpList = styled.div`
  width:30%;
  height:100%;
`

const List = styled.li`
  display:block;
  border-bottom:0.5px solid rgb(178, 178, 178);
  font-size:14px;
  width:100%;
  height:50px;
  text-align: center;
  line-height:50px;
  cursor:pointer;

  :hover{
    background-color: rgb(224, 239, 255);
    color:rgb(26, 5, 160);  
  }

`

const Header = styled.header`
  background-color: rgb(178, 178, 178);
  display:flex;
  justify-content:space-around;
  align-items: center;
  color:#fff;
  padding:12px;
  h3{
      font-size:13px;
      margin:0;
    }
  span{
    padding:3px 6px;
    border:0.5px solid rgb(233, 228, 228);
    border-radius:20px;
    font-size:8px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: #d7d7d7;
  font-size: 10px;
  cursor: pointer;
  margin: 0;
`;