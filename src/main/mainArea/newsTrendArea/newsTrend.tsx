import styled from "styled-components"
import Advertisement from "./Advertisement"
import TodayNews from "./todayNews/todayNews"
import TrendPickUp from "./trendPickup/trendPickUp"

const NewsTrendArea = () => {
  return(
    <Container>
      <Advertisement />
      
      <NewsTrend>
        <TodayNews />
        <TrendPickUp />
      </NewsTrend>

    </Container>
  )
}


export default NewsTrendArea


const Container = styled.div`
  margin-left: 20px;
  width:1000px;
`

const NewsTrend = styled.article`
  display:flex;
  height:auto;
  border:0.5px solid rgb(130,130,130)
`