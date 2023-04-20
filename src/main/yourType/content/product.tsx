import styled from "styled-components"

interface ProductProps {
  imgWidth:string,
  imgHeight:string,
  CategoryDisplay?:boolean,
  flexDirection:string
}
const Product = ({imgWidth,imgHeight,CategoryDisplay,flexDirection}:ProductProps) => {
  return(
    <Container flexDirection ={flexDirection}>
      <Thumbnail src = "image/free.jpg" imgWidth={imgWidth} imgHeight={imgHeight}/>
      <div>
        <Category CategoryDisplay={CategoryDisplay}>구매가이드</Category>
        <Title>국민 한팩 비타민</Title>
        <Explain>필요한 영양소만 담아 ~ 에너지 활력 Up!</Explain>
      </div>
    </Container>
  )
}


export default Product

interface ContainerProps {
  flexDirection:string
}

const Container = styled.div<ContainerProps>`
  display:flex;
  flex-direction:${props=> props.flexDirection};
  
`

interface ThumbnailProps {
  imgWidth:string,
  imgHeight:string
}

const Thumbnail = styled.img<ThumbnailProps>`
  width:${props => props.imgWidth};
  height:${props => props.imgHeight};
`

interface CategoryProps {
  CategoryDisplay?:boolean
}
const Category = styled.p<CategoryProps>`
  display:${props => props.CategoryDisplay ? `none` : `block`};
  font-size: 10px;
  color:blue;
`

const Title = styled.p`
  font-size:12px;
  font-weight: 800;
`

const Explain = styled.p`
  font-size: 10px;
  
`