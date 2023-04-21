import styled from "styled-components"

const ItemList = () => {
  return(
    <Container>
      <Item color = "rgb(216, 215, 200);"/>
      <Item color = "rgb(245, 220, 248);"/>
      <Item color = "rgb(215, 243, 204);"/>
    </Container>
  )
}

export default ItemList


const Container = styled.div`
  width:85%;
  display:flex;
  gap:15px;
`

interface ItemProps {
  color:string
}

const Item = styled.div<ItemProps>`
  width:33%;
  height:180px;
  background-color: ${props => props.color};
`
