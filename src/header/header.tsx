import styled from "styled-components"

const Header = () => {
  return(
    <Container>
      <Inner>
        <TopMenu>
          <LeftMenu>
            <li>e클럽혜택</li>
            <li>쇼핑지식</li>
            <li>기획전</li>
            <li>자동차</li>
            <li>조립PC</li>
          </LeftMenu>
        
          <RightMenu>
            <li>로그인</li>
            <li>회원가입</li>
            <li>MY알림</li>
            <li>더보기</li>
          </RightMenu>
        </TopMenu>

        <SearchBarArea>
          <MainLogo /> 
          <SearchBar />

          <AllCategory />

          <ul>
            <li>브랜드스토어</li>
            <li>다이어트보조제</li>
            <li>#혜택백서</li>
          </ul>

          <img />
        </SearchBarArea>    
      </Inner>
    </Container>
  )
}


export default Header

const Container = styled.header`
  background-color:rgb(83, 186, 245);
  `
const Inner = styled.div`
  padding:0 10%;
`

const TopMenu= styled.div`
  display:flex;
  justify-content:space-between;
`

const LeftMenu= styled.ul`
  
`

const RightMenu = styled.ul`
  
`

const SearchBarArea = styled.div`
  
`

const MainLogo = styled.img`
  
`

const SearchBar = styled.input`
  
`

const AllCategory= styled.select`
  
`
