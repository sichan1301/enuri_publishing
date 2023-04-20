import styled from "styled-components"

const TopMenu = () => {
  return(
    <Container>
      <MenuList>
        <li><a href="">회사소개</a></li>
        <li><a href="">광고안내</a></li>
        <li><a href="">입점안내</a></li>
        <li><a href="">판매자 광고센터</a></li>
        <li><a href="">판매자SDU(L)</a></li>
        <li><a href="">이용약관</a></li>
        <li><a href="">개인정보처리방침</a></li>
        <li><a href="">법적고지</a></li>
        <li><a href="">쇼핑몰검색</a></li>
        <li><a href="">고객센터</a></li>
        <li><a href="">전체메뉴</a></li>
        <li><a href="">사이트맵</a></li>
      </MenuList>
    </Container>
  )
}

export default TopMenu 

const Container = styled.div`
  border-bottom:0.5px solid rgb(150,150,150);
`

const MenuList = styled.ul`
  width:1250px;
  margin:0 auto;
  padding:20px 0;
  display: flex;
  li{
    font-size:12px;
    margin-right:20px;
    position:relative;
    :after{
      position:absolute;
      content:"";
      width:1px;
      top:2px;
      right:-10px;
      height:13px;
      background-color:rgb(161, 158, 158);
    }
    :last-child{
      position:static;
    }
  }
`