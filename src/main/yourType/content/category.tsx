import styled from "styled-components"

const Category = () => {
  return(
    <Container>
      <button>#봄메이크업</button>
      <button>#비타민</button>
      <button>#봄테리어</button>
      <button>#카메라</button>
    </Container>
  )
}


export default Category

const Container = styled.div`
  margin:20px 0;

  button{
    font-size:14px;
    background-color: rgb(235, 235, 235);
    border-radius: 5px;
    padding:7px;
    margin-right:10px;
    width:100px;
  }
`