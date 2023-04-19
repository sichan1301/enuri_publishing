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
  font-size:50px;
  padding:40px 60px;
  margin:0 0 20px 0;
  background: rgb(39, 40, 66) url(assets/free.jpg) no-repeat 85% center/contain;
  p{
    margin:0;
    font-weight:800;
    :first-child{
      font-size:26px;
      color:rgb(40, 210, 213);
    }
    :last-child{
      font-size: 32px;
      color:#fff;
    }
  }
`