import styled from "styled-components"

const Video = () => {
  return(
    <Container>
      <Thumbnail src = "image/cost.jpg" />

      <div>
        <Channel>뷔티크</Channel>
        <Title>M2 맥북에어 미드나이트 개봉기 이게 263만원?!</Title>
      </div>
    </Container>
  )
}

export default Video 

const Container = styled.div`
  display:flex;
`

const Thumbnail = styled.img`
  width:100%;
  height:100px;
`

const Channel = styled.p`
  font-size:12px;  
  color:blue;
`

const Title = styled.p`
  font-size:12px;  

`