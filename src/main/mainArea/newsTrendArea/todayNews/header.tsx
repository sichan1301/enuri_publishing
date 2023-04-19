import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return(
    <Container>
      <h3><a href ="">오늘의 뉴스</a></h3>
      <Menu>
        <li>디지털/가전</li>
        <li>컴퓨터</li>
        <li>자동차</li>
        <li>라이프</li>
      </Menu>

      <div>
        <Icon icon = {faChevronLeft} />
        <Icon icon = {faChevronRight} />
      </div>
  
    </Container>
  )
}



export default Header

const Container = styled.header` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:30px;
  h3{
    font-weight:900;
    font-size:16px;
  }
`

const Menu = styled.ul`
  padding:0;
  margin:0;
  display: flex;
  li{
    font-size:10px;
    margin:0 10px;
    padding: 0;
    position:relative;
    :first-child{
      position:static;
    }
    :before{
      position:absolute;
      top:3px;
      left:-10px;
      background-color:#b4b4b4;
      content:"";
      width:2px;
      height:13px;
    }
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: #acacac;
  font-size: 15px;
  cursor: pointer;
  margin: 0 5px;

`;