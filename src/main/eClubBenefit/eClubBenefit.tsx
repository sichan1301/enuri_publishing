import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const EClubBenefit = () => {
  return(
    <Container>
      <Inner>
        <h2>e클럽 혜택</h2>
        <EClub>
          <ItemList>
            <Item color = "rgb(216, 215, 200);"/>
            <Item color = "rgb(245, 220, 248);"/>
            <Item color = "rgb(215, 243, 204);"/>
          </ItemList>

          <EClubBox>
            <div><Icon icon={faShoppingCart}/> <span>쇼핑적립</span></div>
            <div><Icon icon={faShoppingCart}/> <span>이벤트적립</span></div>
            <div><Icon icon={faShoppingCart}/> <span>e머니 활용</span></div>
          </EClubBox>
        </EClub>
      </Inner>
      
    </Container>
  )
}

export default EClubBenefit

const Container = styled.section`
  padding:30px 0;
  background-color: rgb(247, 247, 247);
`

const Inner = styled.div`
  width:1250px;
  margin : 0 auto;
  h2{
    margin:0;
  }
`

const EClub = styled.div`
  margin-top:20px;  
  display: flex;
`

const ItemList = styled.div`
  width:85%;
  display:flex;
  gap:15px;
`

interface ItemProps {
  color:string
}

const Item = styled.div<ItemProps>`
  width:33%;
  height:180px;
  background-color: ${props => props.color};
`

const EClubBox = styled.div`
  margin-left:20px;
  width:15%;
  height:180px;
  div{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height:60px;
    border:0.5px solid rgb(213, 212, 212);
  }  
`

const Icon = styled(FontAwesomeIcon)`
  color: #ffa371;
  font-size: 15px;
  cursor: pointer;
  margin: 0 10px;
`;