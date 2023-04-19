import styled from "styled-components"
import CategoryList from "./categoryList"
import NewsTrendArea from "./newsTrendArea/newsTrend"

const MainArea = () => {
  return(
    <Container>
      <CategoryList />
      <NewsTrendArea />
    </Container>
  )
}

export default MainArea

const Container = styled.div`
  width:1250px;
  margin:20px auto;
  display:flex;
`