import styled from "styled-components"
import Gallery from "../gallery"
import Video from "../video"

const Content = () => {
  return(
    <Container>
      <GalleryList>
        <Gallery />
        <Gallery />
      </GalleryList>

      <VideoList>
        <Video />
        <Video />
        <Video />
      </VideoList>
    </Container>
  )
}



export default Content 


const Container = styled.div`
  display: flex;
` 

const GalleryList= styled(Container)`
  
`

const VideoList= styled.div`
  
`
