import styled from "styled-components"
import { Container } from "../yourType/yourType"
import CompanyList from "./companyList"

const BrandByCategory = () => {
  return(
    <Inner>
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
    </Inner>
  )
}


export default BrandByCategory

const Inner =styled(Container)`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  border:0.5px solid rgb(171, 170, 170);
`