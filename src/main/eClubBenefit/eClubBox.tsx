import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const EClubBox = () => {
  return(
    <Container>
      <div><Icon icon={faShoppingCart}/> <span>쇼핑적립</span></div>
      <div><Icon icon={faShoppingCart}/> <span>이벤트적립</span></div>
      <div><Icon icon={faShoppingCart}/> <span>e머니 활용</span></div>
    </Container>
  )
}

export default EClubBox

const Container = styled.div`
  margin-left:20px;
  width:15%;
  height:180px;
  div{
    text-align: center;
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