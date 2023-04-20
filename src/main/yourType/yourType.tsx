import styled from "styled-components"
import Content from "./content/content"

const YourType = () => {
  return(
    <Container>
      <h2>당신의 취향을 저격할 PICK</h2>
      <Content />
    </Container>
  )
}


export default YourType

export const Container = styled.section`
  width: 1250px;
  margin:20px auto;
`