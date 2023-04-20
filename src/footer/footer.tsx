import styled from "styled-components"
import CopyRightArea from "./copyright"
import CorporationInfoArea from "./corporationInfo"
import TopMenu from "./topMenu"

const Footer = () => {
  return(
    <Container>
      <TopMenu />
      <CorporationInfoArea />
      <CopyRightArea />
    </Container>
  )
}


export default Footer

const Container = styled.footer`
  border-top:1px solid black;
`