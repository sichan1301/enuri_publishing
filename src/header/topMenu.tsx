import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const TopMenu = () => {
  return(
    <Container>
      <Inner>
        <LeftMenu>
          <li><a href="">e클럽혜택</a></li>
          <li><a href="">쇼핑지식</a></li>
          <li><a href="">기획전</a></li>
          <li><a href="">자동차</a></li>
          <li><a href="">조립PC</a></li>
        </LeftMenu>
      
        <RightMenu>
          <li>
            <a href="">
              <Icon icon={faUser} />
              <span>로그인</span>
            </a>
          </li>
          <li>
            <a href="">
              <Icon icon={faUser} />
              <span>회원가입</span>
            </a>
          </li>
          <li>
            <a href="">
              <Icon icon={faUser} />
              <span>MY알림</span>
            </a>
          </li>
          <li>
            <a href="">
              <Icon icon={faUser} />
              <span>더보기</span>
            </a>
          </li>
        </RightMenu>
      </Inner>
    </Container>
  )
}

export default TopMenu

const Container = styled.div`
  border-bottom: 1px solid rgba(139, 139, 139, 0.4);
`

const Inner = styled.div`
  width:1250px;
  margin:0 auto;
  display:flex;
  align-items: center;
  justify-content:space-between;
`


const LeftMenu= styled.ul`
  display: flex;
  margin :7px 0; 
  li{
    margin-right: 10px;
    list-style: none;
    font-size: 14px;
    font-weight: 800;
    cursor:pointer;
    
    a{
      color: #fff;
    }
  }
`

export const RightMenu = styled(LeftMenu)`
  li{
    margin:0 10px;
    position:relative;
    ::before{
      position:absolute;
      top:3px;
      left:-5px;
      background-color:#b4b4b4;
      content:"";
      width:2px;
      height:13px;
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin: 0 10px;
`;
