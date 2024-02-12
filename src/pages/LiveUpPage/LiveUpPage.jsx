import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import banner from '../../icon/banner1.png'
import LiveUpNavigation from '../../components/LiveUpPage/LiveUpNavigation';
import RankingFilterBtn from '../../components/LiveUpPage/RankingFilterBtn';
import RankingBox from '../../components/LiveUpPage/RankingBox';
import LiveUpPagination from '../../components/LiveUpPage/LiveUpPagnation';
import { dummyLiveUpPost } from '../../LiveUpDummyDate';
import LiveUpApi from '../../apis/LiveUpApi';
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #1c1c1c;
`

const BannerImg =styled.img`
  width: 100%;
  height: 500px;
  margin-top: 122px;

  `;

const RankingContainer = styled.div`
  width: 1220px;
  height: 180px;
  margin-top: 160px;
`
const MyLiveUpContainer = styled.div`
  width: 1220px;
  margin-top: 150px;
`

const RankingTitle = styled.h1`
  color:#FFF;
  font-size: 25px;
  font-weight: 800;
  line-height: 140%;
  display: inline;
  margin-right: 10px;
`

const MyLiveUpTitle = styled.h1`
  color: #FFF;
  font-size: 25px;
  font-weight: 800;
  line-height: 140%;
  display: inline;
`


function LiveUpPage() {
  const [posts, setPosts] = useState([]);

  const handleGetPost = async () => {
    try{
      const response = await LiveUpApi.getPosts();
      //console.log(response);
      setPosts(response.result)
    }catch (error){
      console.error("post 불러오기 실패", error);
    }
  }
  const handleGetPost2 = async () => {
    try{
      const response = await LiveUpApi.getPosts2();
      console.log("테스트", response);
      //setPosts(response.result)
    }catch (error){
      console.error("post 불러오기 실패", error);
    }
  }

  useEffect(()=>{
    handleGetPost();
    handleGetPost2();
  },[])
  return (
    <MainWrapper>
      <BannerImg src={banner} alt="banner" />
      <RankingContainer>
        <RankingTitle>🥇LIVE UP 누적 랭킹</RankingTitle>
        <RankingFilterBtn />
        <RankingBox />
      </RankingContainer>
      <MyLiveUpContainer>
        <MyLiveUpTitle>MY LIVE UP</MyLiveUpTitle>
        <LiveUpNavigation />
        <LiveUpPagination data={posts}/>
      </MyLiveUpContainer>
    </MainWrapper>
  )
}

export default LiveUpPage