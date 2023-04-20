import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'

const BottomMenu = () => {
  return(
    <Container>
      <SearchBarArea>
        <a href=""><MainLogo src = "/image/cost.jpg"/></a>
        <SearchBar placeholder="똑!똑!한 쇼핑혜택-4월엔 나도 e100만점?!" />
        <SearchButton icon={faMagnifyingGlass}/>

        <AllCategory >
          <option>전체 카테고리</option>
        </AllCategory>

        <CenterMenu>
          <li><a href="">브랜드스토어</a></li>
          <li><a href="">다이어트보조제</a></li>
          <li><a href="">#혜택백서</a></li>
        </CenterMenu>

      </SearchBarArea>    
          
      <a href=""><Advertisement src = "/image/cost.jpg" /></a>
    </Container>
  )
}

export default BottomMenu


const Container = styled.div`
  width:1250px;
  padding:20px 0;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const SearchBarArea = styled.div`
  display: flex;
  align-items: center;
`

const MainLogo = styled.img`
  width:120px;
  height: 50px;
  margin-right:20px;
`

const SearchBar = styled.input`
  width:300px;
  height:35px;
  :focus{
    padding-left:10px;
  }

  ::placeholder{
    padding-left:8px;
  }
  
`

const SearchButton = styled(FontAwesomeIcon)`
  width:35px;
  height:28px;
  color:#fff;
  padding:4px 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(77, 143, 213);
  cursor:pointer;
`

const AllCategory= styled.select`
  margin-left:40px;
  width:160px;
  height:38px;
  border-radius: 5px;
  color:#fff;
  background-color: rgb(76, 154, 178);

`

const CenterMenu= styled.ul`
  margin-left:30px;
  padding:0;
  li{
    a{
      color:#fff;
    }
    display: inline;
    margin: 0 10px;
    font-weight: 800;
    :nth-child(even){
      position:relative;
      :before{
        position:absolute;
        top:4px;
        left:-10px;
        background-color:#c7c7c7;
        content:"";
        width:2px;
        height:13px;
      }
      :after{
        position:absolute;
        top:4px;
        right:-10px;
        background-color:#c7c7c7;
        content:"";
        width:2px;
        height:13px;
      }

    }
    :hover{
      border-bottom: 1px solid #fff;
    }
  }
`

const Advertisement = styled.img`
  width:130px;
  height:50px;
`