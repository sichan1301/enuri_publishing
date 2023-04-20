import styled from "styled-components"
import AbroadPrice from "./abroadPrice/abroadPrice"
import BrandCategory from "./brandCategory/brandCategory"
import Car from "./car/car"
import CustomPC from "./customPC/customPC"
import EClubBenefit from "./eClubBenefit/eClubBenefit"
import MainArea from "./mainArea/mainArea"
import MostPopular from "./mostPopular.tsx/mostPopular"
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
      <MostPopular />
      <EClubBenefit />
      <CustomPC />
      <AbroadPrice />
      <Car />
      <Travel />
      <PopularShoppingmall />
      <BrandCategory />
      <Notice />
    </Container>
  )
}

export default Main

const Container = styled.main`
  margin:0 auto;
`