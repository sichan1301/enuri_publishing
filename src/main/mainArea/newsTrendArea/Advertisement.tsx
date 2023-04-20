import styled from "styled-components"

const Advertisement = () => {
  return(
    <Container>
      <p>극강의 한계를 뛰어넘은 혁신적인 기술</p>
      <p>인텔 코어 i9-13900K 프로세서</p>
    </Container>
  )
}


export default Advertisement

const Container = styled.div`
  height:130px;
  margin:0 0 20px 0;
  background: rgb(39, 40, 66) url(assets/free.jpg) no-repeat 85% center/contain;
  p{
    font-size:50px;
    font-weight:800;
    margin:0;
    padding-left:25px;
    :first-child{
      padding-top:25px;
      font-size:26px;
      color:rgb(40, 210, 213);
    }
    :last-child{
      font-size: 32px;
      color:#fff;
    }
  }
`