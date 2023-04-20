import styled from "styled-components"
import { Container } from "./yourType/yourType"

const Notice = () => {
  return(
    <NoticeBackground>
      <TextMenu>
        <h3>공지사항</h3>
        <a href="">e머니 적립 종료 공지 (쿠팡)</a>
      </TextMenu>

      <TextMenu>
        <a href="">입점문의</a>
        <a href="">판매자 지원</a>
      </TextMenu>
    </NoticeBackground>
  )
}

export default Notice


const NoticeBackground = styled(Container)`
  padding:20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(239, 239, 239);
  border:0.5px solid rgb(206, 206, 206);
`

const TextMenu = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;

  h3{
    margin:0;
    font-size:14px;
    position:relative;
    :after{
      position:absolute;
      content:"";
      width:1px;
      top:2px;
      right:-10px;
      height:13px;
      background-color:rgb(161, 158, 158);
    }
  }
  a{
    font-size: 14px;
    margin-left:20px;
    color:rgb(109, 109, 109);
  }
`
