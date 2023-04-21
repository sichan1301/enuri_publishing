import styled from "styled-components"

const NewsList = () => {
  return(
    <Container>
      <li><a href="">레퍼런스 헤드폰 ‘MDR-MV1’ 및 콘덴서 마이크 ‘C-80’ 출시</a></li>
      <li><a href="">세스코 'IoT 공기청정기 3UP' 출시, 초미세먼지 바이러스도 OK</a></li>
      <li><a href="">노태문 야심작 '갤S23' 일냈다, 삼성, 애플 꺾고 스마트폰 세계 1위</a></li>
      <li><a href="">LG전자, 발달장애 아동 청소년 가전제품 사용법 '눈높이 교육'</a></li>
      <li><a href="">니콘이미징, 봄 맞이 NIKKOR Z 렌즈 캐시백 프로모션 실시</a></li>
    </Container>

  )
}

export default NewsList 

const Container = styled.ul`
  border-top: 0.5px solid rgb(215, 215, 215);
  padding:15px;
  li{
    /* position:relative;
    display: inline-block; */
    margin: 0 0 8px 0;
    font-size: 12px;

    ::marker{
      color:rgb(196, 49, 49);
      margin:0;
    }

    /* :before{
      position:absolute;
      left:-15px;
      top:3px;
      content:"●";
      color:rgb(215, 215, 215);
      font-size:4px;
    } */

    :hover{
      border-bottom: 1px solid black;
    }
  }
`