import styled from "styled-components"
import AbroadPrice from "./abroadPrice/abroadPrice"
import BrandCategory from "./brandByCategory/brandByCategory"
import Car from "./car/car"
import CustomPC from "./customPC/customPC"
import EClubBenefit from "./eClubBenefit/eClubBenefit"
import MainArea from "./mainArea/mainArea"
import PopularProduct from "./popularProduct.tsx/popularProduct"
import Notice from "./notice"
import PopularShoppingmall from "./popularShoppingmall/popularShoppingmall"
import ShoppingKnowledge from "./shoppingKnowledge.tsx/shoppingKnowledge"
import Travel from "./travel/travel"
import YourType from "./yourType/yourType"

const Main = () => {
  return(
    <Container>
      <MainArea />
      <YourType />
      <ShoppingKnowledge />
      <PopularProduct />
      <EClubBenefit />
      <CustomPC />
      <AbroadPrice />
      <Car />
      <Travel />
      <PopularShoppingmall />
      <BrandCategory />
      <Notice />

      <RightBanner src ="image/free.jpg"/>
      <LeftBanner src ="image/cost.jpg" />
      <LeftBanner2 src ="image/free.jpg" />
    </Container>
  )
}

export default Main

const Container = styled.main`
  margin:0 auto;
`

const RightBanner = styled.img`
  position: fixed; 
  right: 50%; 
  top: 180px; 
  margin-right: -720px;
  text-align:center;
  width: 80px;
`

const LeftBanner = styled.img`
  position: fixed; 
  left: 50%; 
  top: 180px; 
  margin-left: -750px;
  text-align:center;
  width: 80px;
  height:200px;
`

const LeftBanner2 = styled(LeftBanner)`
  top:390px;
`