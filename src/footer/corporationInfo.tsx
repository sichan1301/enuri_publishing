import styled from "styled-components"
import { Inner } from "../main/car/car"
import { Container } from "../main/yourType/yourType"

const CorporationInfoArea = () => {
  return(
    <CoporationInfo>
      <Text>
        <p><span>써머스플랫폼</span> 서울시 금천구 가산디지털1로 186, 제이플라츠빌딩 13층 <span>대표이사</span> : 정희정 <span>사업자등록번호</span> : 206-81-18164 <span>통신판매신고</span> : 2020-서울금천-1949호</p>
        <p><span>대표전화</span> : 02-6354-3601 <span>팩스</span> : 02-6354-3600 <span>문의</span> : master@enuri.com</p>
      </Text>
      
      <AppDownload>
        <img src = "image/free.jpg" />
        <div>
          <p>에누리 가격비교</p>
          <p>앱 다운로드</p>
        </div>
      </AppDownload>
    </CoporationInfo>
  )
}

export default CorporationInfoArea

const CoporationInfo = styled(Inner)`
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  span{
    font-size: 13px;
    font-weight: 900;
    color:rgb(59, 59, 59);
  }
  p{
    font-size:12px;
  }
`

const AppDownload = styled(Container)`
  margin:0;
  display:flex;
  align-items:center;
  width:170px;
  p{
    font-size:14px;
    margin:0;
    :first-child{
      font-weight: 900;
    }
  }
  img{
    width:50px;
    height:50px;
  }
`