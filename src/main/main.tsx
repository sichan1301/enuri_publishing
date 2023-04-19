import styled from "styled-components"
import MainArea from "./mainArea/mainArea"
import YourType from "./yourType/yourType"

const Main = () => {
  return(
    <Container>
      <MainArea />
      <YourType />
    </Container>
  )
}

export default Main

const Container = styled.main`
  margin:0 auto;
`