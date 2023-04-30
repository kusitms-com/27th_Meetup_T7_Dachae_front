import styled from "styled-components";

export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: white;
  border: 1px solid red;

`
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: white;
  border: 1px solid red;

`
export const MainBody_Tapbar = styled.div`
  position: relative;
  width: 100%;
  height: 57px;
  background-color: white;
  border: 1px solid red;

  .MainBody_Tapbar_In{
    position: absolute;
    width: 540px;
    height: 44px;
    border: 1px solid red;
    margin-left: 112px;
    margin-top: 13px;
  }
  .MainBody_Tapbar_In > button{
    width: 135px;
    height: 44px;
    background-color:transparent;
    border: none;
    font-size: 20px;
    color: #B0B0B0;
  }
`// 탭바 박스 생성

export const MainBody_Select = styled.div`
  position: relative;
  width: 100%;
  height: 115px;
  background-color: pink;
  border: 1px solid red;

`
export const MainBody_Today = styled.div`
  position: relative;
  width: 100%;
  height: 463px;
  background-color: white;
  border: 1px solid red;
  align-items: center;
  
`
export const MainBody_Today_In = styled.div`
  position: absolute;
  width: 1136px;
  height: 350px;
  background-color: white;
  border: 1px solid blue;
  margin-left: 72px;
`
 export const MainBody_Today_New = styled.div`
  position: relative;
   width: 706px;
   height: 350px;
  
  background-color: white;
  border: 1px solid red;
`
// export const MainBody_Today_My = styled.div`
//   position: relative;
//   width: 380px;
//   height: 350px;
  
//   margin-top: 42px;
//   background-color: white;
//   border: 1px solid red;

// `


//메인페이지 MainBody_Content 안 컴포넌트 스타일 지정
export const MainBody_Content = styled.div`
  position: relative;
  width: 100%;
  height: 684px;
  background-color: white;
  border: 1px solid red;

`

export const MainBody_Content_title = styled.div`
  position: relative;
   width: 100%;
   height: 91px;
  background-color: white;
  border: 1px solid blue;
  display: flex;
  align-items: end;
`
export const MainBody_Content_title1 = styled.div`
 position: absolute;
  left: 114px;
  font-size: 26px;
  
`
export const MainBody_Content_People = styled.div`
  position: absolute;
  right: 220px;
  font-size: 18px;
  color: #7D7D7D;
`
export const MainBody_Content_detail = styled.div`
  position: absolute;
  right: 134px;
  size: 18px;
`

/////여기까지 컴포넌트
export const MainBody_Content_Btn = styled.div`
  position: relative;
  width: 1056px;
  height: 82px;
  border: 1px solid blue;
  margin-left: 112px;
  margin-top: 24px;
  background-color: #F6F6F6;
  border-radius: 16px;
  display: flex;
  text-align : center;
  line-height : 80px;
  font-size: 16px;

  .Content_Btn_3 {
  
  width: 352px;
  height: 82px;
  
}
.Content_Btn_2 {
  
  width: 352px;
  height: 82px;
  border: 1px solid red;
  
}
 .Btn_3{
  margin-right: 24px;
 }
`
export const MainBody_Content_Program = styled.div`
  position: relative;
  width: 1056px;
  height: 481px;
  border: 1px solid blue;
  margin-left: 112px;
`
export const MainBody_Content_Program_Title = styled.div`
height: 30px;
border: 1px solid blue;
font-size: 20px;
margin-top: 44px;
`
export const MainBody_Content_Program_Content = styled.div`
position: relative;
width: 1056px;
height: 330px;
border: 1px solid blue;
margin-top: 24px;
display: flex;
justify-content: space-between;
`