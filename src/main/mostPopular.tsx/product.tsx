import styled from "styled-components"

const Product = () => {
  return(
    <Container>
      <ProductImg />

      <ProductInfo>

        <BrandReview>
          <Brand>G마켓</Brand>

          <GradeReview>
            <span>⭐︎</span>
            <Grade>5.0점</Grade>
            <Review>(215건)</Review>
          </GradeReview>
        </BrandReview>

        <Name>삼성전자 비스포크 무풍에어컨 AF18CX839WSR[공식인증점]</Name>
        

        <LowestPrice>최저가<span>3,299,990</span>원</LowestPrice>


        <Price>
          <p>최대 0.3% 적립</p>
          <p>가격비교<span>101</span></p>
        </Price>
      </ProductInfo>
      
    </Container>
  )
}


export default Product


const Container = styled.div`

`


const ProductImg = styled.div`
  width:100%;
  height:180px;
  background: rgba(190,190,190,0.5) url(image/free.jpg) no-repeat center center/contain;
`

const ProductInfo = styled.div`
  padding:10px;
`

const BrandReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const GradeReview = styled.div`
  display: flex;
  align-items: center;
`

const Brand = styled.picture`
  font-size:12px;
  color:rgb(162, 162, 162);
`

const Grade = styled.p`
  font-size:12px;
  font-weight: 900;
`

const Review = styled.p`
  font-size:10px;
  color:rgb(187, 187, 187);
`

const Name = styled.p`
  font-size:14px;
`

const LowestPrice = styled.p`
  font-size:10px;
  span{
    font-size:14px;
    font-weight: 900;
  }
`

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    :first-child{
      color:blue;
      font-size:12px;
    }
    :last-child{
      font-size:12px;
      padding:5px 10px;
      border:0.5px solid rgb(180,180,180);
      border-radius: 15px;
    }
  }
`


