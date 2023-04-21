import styled from "styled-components"

const CompanyList = () => {
  return(
    <Container>
      <h3>컴퓨터</h3>
      <li><a href="">LG 노트북스토어</a></li>
      <li><a href="">한사랑씨앤씨</a></li>
      <li><a href="">레노버온라인스토어</a></li>
      <li><a href="">한성컴퓨터</a></li>
      <li><a href="">아이티엔조이</a></li>
      <li><a href="">공식판매점</a></li>
      <li><a href="">삼성공식 엔씨디지텍</a></li>
      <li><a href="">삼성공식파트너 코잇</a></li>
      <li><a href="">LG온라인샵</a></li>
      <li><a href="">LG전자인증점 유어아이디</a></li>
    </Container>
  )
}

export default CompanyList

const Container = styled.ul`
  padding:30px;
  border-right:0.5px solid rgb(171, 170, 170);
  :last-child{
    border:none;
  }
  h3{
    font-size: 16px;
    font-weight: 900;
    margin:0;
  }
  li{
    margin:10px 0;
    font-size:14px;
    a{
      color:rgb(106, 106, 106);
    }
  }
`

