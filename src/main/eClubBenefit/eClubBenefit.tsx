import styled from "styled-components"
import EClubBox from "./eClubBox"

import ItemList from "./itemList"

const EClubBenefit = () => {
  return(
    <Container>
      <Inner>
        <h2>e클럽 혜택</h2>
        <EClub>
          <ItemList />
          <EClubBox />
        </EClub>
      </Inner>
    </Container>
  )
}

export default EClubBenefit

const Container = styled.section`
  padding:30px 0;
  background-color: rgb(247, 247, 247);
`

const Inner = styled.div`
  width:1250px;
  margin : 0 auto;
  h2{
    margin:0;
  }
`

const EClub = styled.div`
  margin-top:20px;  
  display: flex;
`
