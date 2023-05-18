import { 
  CommuListContainer, 
  CommuCardContainer 
} from "./CommuList.styled";
import CommuRegion from "../CommuRegion";
import { commuRegions, commuTabKind, selectedRegion } from "../../../recoil/community";
import { useRecoilValue } from "recoil";
import { ReviewData, CommuReviewData } from "../../../types/review";
import { CommuTogetherData, TogetherData } from "../../../types/together";
import { useState, useEffect } from "react";
import axios from "axios";
import Review from "../../Review";
import Together from "../../Together";

function CommuList () {
  const regions = useRecoilValue(commuRegions);
  const commuTab = useRecoilValue(commuTabKind);
  const selected = useRecoilValue(selectedRegion);
  const [commuReviews, setCommuReviews] = useState<CommuReviewData[]>([]);
  const [commuTogethers, setCommuTogethers] = useState<CommuTogetherData[]>([]);

  useEffect(() => {
    setCommuReviews([]);
    setCommuTogethers([]);
    if(commuTab == 'review') {
      getReviews();
      return;
    }
    if(commuTab == 'together') {
      getTogethers();
      return;
    }
  }, [regions, commuTab, selected])

  function getReviews () {
    regions.map((el) => {
      axios.get(`${import.meta.env.VITE_APP_HOST}/review/page/${el}`)
      .then((response) => {
        const res = response.data.data.reviews;
        const tempArr: ReviewData[] = [];
        for(let key in res) {
          const tempEl: ReviewData = {
            userNick: res[key].nickName,
            time: '18시간 전',
            title: res[key].title,
            lecture: res[key].programName,
            content: res[key].content,
            region: res[key].tags[0],
            reviewIdx: res[key].reviewIdx,
            detailPlace: res[key].tags[1],
            detailOrCommu: 'community'
          }
          tempArr.push(tempEl);
        }
        setCommuReviews(commuReviews => [...commuReviews, {
          region: el,
          reviews: tempArr
        }]);
      })
      .catch((err) => console.log(err));
    })
  }

  function getTogethers () {
    regions.map((el) => {
      axios.get(`${import.meta.env.VITE_APP_HOST}/listen/page/${el}`)
      .then((response) => {
        const res = response.data.data.listenTogethers;
        const tempArr: TogetherData[] = [];
        for(let key in res) {
          const tempEl: TogetherData = {
            nickname: res[key].nickName,
            time: '18시간 전',
            recruiting: res[key].recruiting,
            title: res[key].title,
            favFields: res[key].favFields,
            goalNum: res[key].goalNum,
            currentNum: res[key].currentNum,
            tags: res[key].tags,
            programName: res[key].programName,
            listenIdx: res[key].listenIdx,
            detailOrCommu: 'community'
          }
          tempArr.push(tempEl);
        }
        setCommuTogethers(commuTogethers => [...commuTogethers, {
          region: el,
          togethers: tempArr
        }]);
      })
      .catch((err) => console.log(err));
    })  
  }

  return(
    <CommuListContainer>
      <CommuRegion />
      <CommuCardContainer>
        {
          (commuTab == 'review') && (commuReviews) &&
          (
            (selected == "전체보기") ? (
              commuReviews.map((el) =>
                (
                  el.reviews.map((el, idx) => (
                    <Review props={el} key={idx} ></Review>
                  ))
              ))
            ) : (
              commuReviews.map((el) => (
                (el.region == selected) && (
                  el.reviews.map((el, idx) => (
                    <Review props={el} key={idx} ></Review>
                  ))
                )
              ))
            )
          )
        }
                {
          (commuTab == 'together') && (commuTogethers) &&
          (
            (selected == "전체보기") ? (
              commuTogethers.map((el) =>
                (
                  el.togethers.map((el, idx) => (
                    <Together prop={el} key={idx} ></Together>
                  ))
              ))
            ) : (
              commuTogethers.map((el) => (
                (el.region == selected) && (
                  el.togethers.map((el, idx) => (
                    <Together prop={el} key={idx} ></Together>
                  ))
                )
              ))
            )
          )
        }
      </CommuCardContainer>
    </CommuListContainer>
  )
}

export default CommuList;