import styled from "styled-components"

const HeadLine = () => {
  return(
    <Container>

      <Article>
        <img src="image/cost.jpg" />
        <p>필립스, tvN '장사천재 백사장'에서 천재 믹서기로 눈길</p>
      </Article>
      <Article>
        <img src="image/cost.jpg" />
        <p>커넥트웨이브 메이크샵, 간편결제 서비스 ‘애플페이’ 지원</p>
      </Article>

    </Container>
  )
}


export default HeadLine


const Container = styled.div`
  display: flex;
  gap:20px;
  padding:20px 0;
`

const Article = styled.div`
  width:50%;

  img{
    width:100%;
    height:150px;
    border:0.5px solid rgb(130,130,130);
  }
  p{
    font-size:12px;
    margin:0;
  }
`