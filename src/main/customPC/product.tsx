import styled from "styled-components"

interface ProductProps {
  imgHeight:string,
  containerWidth:string
}

const Product = ({imgHeight,containerWidth}:ProductProps) => {
  return(
    <Container containerWidth ={containerWidth}>
      <Img imgHeight={imgHeight} /> 
      <Spec>i3-12100 / 16GB / NVME 512GB / 내장그래픽 / 500W</Spec>
    </Container>
  )
}

export default Product 


interface ContainerProps {
  containerWidth:string
}

const Container = styled.div<ContainerProps>`
  width:${props => props.containerWidth};
`

interface ImgProps {
  imgHeight:string
}

const Img = styled.div<ImgProps>`
  background:url(image/cost.jpg) no-repeat center center/contain;
  width:100%;
  height:${props => props.imgHeight};
  border:0.5px solid rgb(167, 167, 167);
`

const Spec = styled.p`
  font-size:14px;
`
