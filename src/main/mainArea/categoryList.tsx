import styled from "styled-components"

const CategoryList = () => {
  return(
    <Container>
      <ul>
        <li>전체 카테고리</li>
        <li>가전/TV</li>
        <li>컴퓨터/노트북/조립PC</li>
        <li>테블릿/모바일/디카</li>
        <li>스포츠/아웃도어</li>
        <li>공구/자동차</li>
        <li>가구/인테리어</li>
        <li>식품/유아/건강</li>
        <li>생활/주방용품</li>
        <li>반려/취미/문구</li>
        <li>패션/뷰티</li>
        <li>명품관</li>
      </ul>
    </Container>
  )
}


export default CategoryList

const Container = styled.aside`
  border:1px solid rgb(52, 30, 149);
  width:200px;
  
  li{
    line-height:50px;
    height:52px;
    padding-left:15px;
    font-size:14px;
    border-top:0.5px solid rgb(180, 180, 181);
    cursor:pointer;
    :hover{
      color:rgb(52, 30, 149);
    }

    :first-child{
      cursor:pointer;
      color:#fff;
      background-color:rgb(8, 71, 245); 
      font-weight: 800;
    }
  }
`