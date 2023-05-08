import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import  Dropdown ,{ Option }from 'react-dropdown';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import {MainDetailTap} from '../../components/MainDetail/MainDetailTap';

import{

  MainBody_Tapbar,
  MainBody_Content_title,
  MainBody_Content_title1,
  MainBody_Content_detail,
  MainBody_Card,
  Mainbody_CardContent,
  Main_Program,
  Main_Program_Title,
  Main_Program_content,
  TapModal,

} from '../Main/MainPageDetail.styled'
import img from '../../assets/Vector.png'
import img2 from '../../assets/map.png'
import img3 from '../../assets/phone.png'
import MainDetailProgram from '../../components/MainDetailProgram/MainDetailProgram';

const MainPageDetail = () =>{
  const navigate = useNavigate();
  const goLogin =()=>{
      navigate("/login");
  }
  const goMain =()=>{ //메인 디테일
      navigate("/mainDetail");
    }
  const goSuggest =()=>{ //제안할래요
      navigate("/suggest");
    }
  const goCommu =()=>{ //커뮤니티
      navigate("/commu");
    }
  const goMypage =()=>{ //마이페이지
      navigate("/mypage");
    }
  const goMainDetail =()=>{
      navigate("/mainDetail");
    }

  
  

  return (
    <div>
      <Header>
      </Header>
      <MainBody_Tapbar>
      <div className='MainBody_Tapbar_In'>
        <button onClick={goMain}>배움터 정보</button>
        <button onClick={goSuggest}>프로그램 제안</button>
        <button onClick={goCommu}>커뮤니티</button>
        <button onClick={goMypage}>마이페이지</button>
      </div>
      </MainBody_Tapbar>
      <MainBody_Content_title>
            <MainBody_Content_title1>성북구 동네배움터</MainBody_Content_title1>
            <MainBody_Content_detail>
                <div id='center-news__header--setting-text' onClick={goMainDetail}>바로가기</div>
            </MainBody_Content_detail>
        </MainBody_Content_title>
        <MainBody_Card>
          <Mainbody_CardContent onClick={goMainDetail}>
            <img className="Btn_3" alt="1" src={img} />
            <div className='Card'>
            <div className='Card-title'>
              365명
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
          <Mainbody_CardContent onClick={goMainDetail}>
          <img className="Btn_3" alt="1" src={img2} />
            <div className='Card'>
            <div className='Card-title'>
              지도보기
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
          <Mainbody_CardContent>
          <img className="Btn_3" alt="1" src={img3} />
            <div className='Card'>
            <div className='Card-title'>
              배움터 연락하기
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
        </MainBody_Card>
        <Main_Program>
          <Main_Program_Title>성북구에서 모집중인 프로그램</Main_Program_Title>
          <Main_Program_content>
            <MainDetailProgram/>
          </Main_Program_content>
        </Main_Program>
        <TapModal>
            <MainDetailTap/>
        
        </TapModal>
      </div>
      
        
    
  )
}

export default MainPageDetail
