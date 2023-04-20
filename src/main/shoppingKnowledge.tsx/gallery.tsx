import styled from "styled-components"

const Gallery = () => {
  return(
    <Container>
      <Recommend>
        <Thumbnail src="image/cost.jpg"/>
        <GalleryTitle>
          <span>[유머]</span>
          <p>안경을 벗으면 사람들이 못알아본다는 ...</p>
        </GalleryTitle>
      </Recommend>

      <GalleryList>
        <List>
          <span>유머</span>
          <p>댕댕이 범죄장면 남기는 냐옹</p>
        </List>
        <List>
          <span>유머</span>
          <p>교수님 손을 덥석 잡아버린 대학생.jpg</p>
        </List>
        <List>
          <span>유머</span>
          <p>장난 한 번 쳤다가 대박 싸웠네요</p>
        </List>
        <List>
          <span>유머</span>
          <p>추성훈 인스타그램 ......</p>
        </List>
      </GalleryList>
    </Container>
  )
}


export default Gallery 

const Container = styled.div`
  
`
const Recommend = styled.div`
  width:300px;

`

const Thumbnail = styled.img`
  width:100%;
  height:190px;
`

const GalleryTitle = styled.div`
  display:flex;
  align-items: center;
`

const GalleryList = styled.ul`
  
`

const List = styled(GalleryTitle)`
  font-size:8px;
`