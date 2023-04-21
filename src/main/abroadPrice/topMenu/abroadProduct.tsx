import styled from "styled-components"
import Product from "../../customPC/product"


const AbroadProduct = () => {
  return(
    <Container>
      <Product containerWidth ="100%" imgHeight="160px" />
      <BrandPrice>
        <PriceByBrand><Brand color="rgb(5, 88, 5)">Iherb</Brand><p>10,130원</p></PriceByBrand>
        <PriceByBrand><Brand color="rgb(161, 0, 0)">Iherb</Brand><p>10,130원</p></PriceByBrand>
        <PriceByBrand><Brand color="rgb(237, 18, 18)">Iherb</Brand><p>10,130원</p></PriceByBrand>
      </BrandPrice>
    </Container>
  )
}



export default AbroadProduct

const Container = styled.div`
  width:100%;
  padding:10px;
`
const PriceByBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    margin:0;
  }
`

const BrandPrice = styled.div`
  width:100%;
`

interface BrandProps {
  color:string
}

const Brand = styled.p<BrandProps>`
  font-weight: 900;
  color:${props => props.color};
`