import styled from 'styled-components';

import tag_close from '../../assets/GrowRoomAssets/tag-close.svg';
import tag_open from '../../assets/GrowRoomAssets/tag-open.svg';
import tag_popular from '../../assets/GrowRoomAssets/tag-popular.svg';
import tag_study from '../../assets/GrowRoomAssets/tag-study.svg';
import img_like from '../../assets/GrowRoomAssets/img-like.svg';
import img_unlike from '../../assets/GrowRoomAssets/img-unlike.svg';

const Box = styled.div`
  display: flex;
  width: 292px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 24px;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #E2E2E2;
  background: #FFF;
`;

const MainText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #1C1C1C;
  font-size: 16px;
  font-weight: 800;
  line-height: 22.40px;
`;

const DeadLine = styled.p`
padding-bottom:8px;
color: #999999;
font-size: 12px;
font-weight: 400;
line-height: 16.8px;
`

const Views = styled.p`
color: #848484; 
font-size: 12px; 
font-weight: 400
`
const PostBox = ({ popular, study, status, deadline, maintext, views, like}) => {

    const getStatus = () => {
        switch (status) {
          case 'open':
            return tag_open;
          case 'close':
            return tag_close;
          default: 
            return '';
        }
      };

      const isLiked = () => {
        switch (like) {
          case 'like':
            return img_like;
          case 'unlike':
            return img_unlike;
          default:
            return '';
        }
      };

    const formattedViews = views >= 1000 ? '999+' : views;

    return (
        <Box style={{ opacity: status === 'close' ? 0.5 : 1 }}>
            <div style={{ borderBottom: '1px #E6E6E6 solid', paddingBottom: '28px' }}>

                <div style={{ justifyContent: 'flex-start', gap: '10px', display: 'flex', paddingBottom: '20px' }}>
                    {popular && <img src={tag_popular} alt="popular" />}
                    {study && <img src={tag_study} alt="study" />}
                    <img src={getStatus()} alt="Recruit Status" style={{ marginLeft: 'auto' }} />
                </div>

                <DeadLine>{`마감일 | ${deadline}`}</DeadLine>

                <MainText>{`${maintext}`}</MainText>
            </div>

            <div style={{ padding: '12px 0px 14px 0px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', alignSelf: 'stretch' }}>
                <Views>{`조회수 ${formattedViews}회`}</Views>
                <img src={isLiked()} alt="Like"/>
            </div>
            
        </Box>

    );
};

export default PostBox;