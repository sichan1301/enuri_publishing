import styled from "styled-components"
import MainArea from "./mainArea/mainArea"

const Main = () => {
  return(
    <Container>
      <MainArea />
    </Container>
  )
}

export default Main

const Container = styled.main`
  margin:0 auto;
`