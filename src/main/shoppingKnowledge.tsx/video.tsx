import styled from "styled-components"

const Video = () => {
  return(
    <Container>
      <Thumbnail src = "image/cost.jpg" />

      <Text>
        <Channel>뷔티크</Channel>
        <Title>M2 맥북에어 미드나이트 개봉기 이게 263만원?!</Title>
      </Text>
    </Container>
  )
}

export default Video 

const Container = styled.div`
  display:flex;
  height: 33%;
  margin-bottom:10px;
  cursor:pointer;
`

const Thumbnail = styled.img`
  width:180px;
  height:100px;
`
const Text = styled.div`
  width:160px;
`

const Channel = styled.p`
  font-size:12px;  
  color:blue;
`

const Title = styled.p`
  font-size:12px;  
`