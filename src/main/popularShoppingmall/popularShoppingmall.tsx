import styled from "styled-components"
import { Container } from "../yourType/yourType"

const PopularShoppingmall = () => {
  return(
    <Container>
      <h2>인기 쇼핑몰</h2>
      <Table>
        <TableBody>
          <TableRow>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </TableRow>
          <TableRow>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </TableRow>
          <TableRow>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}

export default PopularShoppingmall

const Table = styled.table`
  border-collapse: collapse;
  width:100%;
  td{
    background:url(image/cost.jpg) no-repeat center center/contain;
    border:1px solid black;
    text-align: center;
    height:50px;
  }
`

const TableRow = styled.tr`
  border-collapse: collapse;

`


const TableBody = styled.tbody`
  border-collapse: collapse;

  
`