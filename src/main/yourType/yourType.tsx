import styled from "styled-components"
import Category from "./category"

const YourType = () => {
  return(
    <Container>
      <h2>당신의 취향을 저격할 PICK</h2>
      <Category />
    </Container>
  )
}


export default YourType

const Container = styled.section`
  width: 1250px;
  margin:20px auto;
`