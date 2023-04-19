import styled from "styled-components"
import TopMenu from "./topMenu"
import BottomMenu from "./bottomMenu"

const Header = () => {
  return(
    <Container>
      <TopMenu />
      <BottomMenu />
    </Container>
  )
}


export default Header

const Container = styled.header`
  background-color:rgb(0, 168, 224);
`



