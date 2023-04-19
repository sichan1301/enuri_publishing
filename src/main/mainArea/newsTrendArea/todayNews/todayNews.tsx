import styled from "styled-components"
import Header from "./header"
import HeadLine from "./headLine"
import NewsList from "./newsList"

const TodayNews = () => {
  return(
    <Container>
      <Header />
      <HeadLine />
      <NewsList />
    </Container>
  )
}

export default TodayNews


const Container = styled.div`
  padding:20px;
  width:440px;
`
