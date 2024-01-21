import React, { useState } from 'react';
import styled from 'styled-components';
import PostBoxBlack from './PostBoxBlack';

import gofirst_arrow from '../../icon/arrow7.png'
import gofirst_arrow_disable from '../../icon/arrow11.png'
import goprev_arrow from '../../icon/arrow1.png'
import goprev_arrow_disable from '../../icon/arrow5.png'
import golast_arrow from '../../icon/arrow8.png'
import golast_arrow_disable from '../../icon/arrow9.png'
import gonext_arrow from '../../icon/arrow2.png'
import gonext_arrow_disable from '../../icon/arrow3.png'

import dummyData from '../.././DummyData'
import { Link } from 'react-router-dom';

const PostBoxContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 16px;
  margin-top: 50px;
`
const Paginaion = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  display: flex;
  padding: 0px 360px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
const GotoFirstBtn = styled.button`
  border: 0;
  background-color: transparent;
  background-image: url(${gofirst_arrow});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  &:disabled {
    background-image: url(${gofirst_arrow_disable});
    cursor: default;
  }
`
const GotoPrevtBtn = styled.button`
  border: 0;
  background-color: transparent;
  background-image: url(${goprev_arrow});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  &:disabled {
    background-image: url(${goprev_arrow_disable});
    cursor: default;
  }
`

const GotoLastBtn = styled.button`
  border: 0;
  background-color: transparent;
  background-image: url(${golast_arrow});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  &:disabled {
    background-image: url(${golast_arrow_disable});
    cursor: default;
  }
`
const GotoNexttBtn = styled.button`
  border: 0;
  background-color: transparent;
  background-image: url(${gonext_arrow});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  &:disabled {
    background-image: url(${gonext_arrow_disable});
    cursor: default;
  }
`

const NumberBtn = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
  color: #8D8D8D;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 4px 7.686px 4px 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  border-radius: 30px;
  cursor: pointer;
`

function LiveUpPagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // 한 페이지에 표시할 항목 수
  // const totalPages = Math.ceil(data.length / itemsPerPage); // 전체 페이지 수
  const totalPages = 5;

  // 현재 페이지에 해당하는 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };
  return (
    <div>
      <PostBoxContainer>
        {Array.from({ length: 12 }, (_, idx) => {
          const data = dummyData[idx % 5];
          const postLink = `/liveup/${idx}`
          return (
            <Link to={postLink} style={{ textDecoration: 'none' }}>
            <PostBoxBlack
              key={idx}
              deadline={data.deadline}
              maintext={data.maintext}
              views={data.views}
              status={data.status}
              like={data.like}
              popular={data.popular}
              study={data.study}
            />
            </Link>
          );
        })}
      </PostBoxContainer>

      <Paginaion>
        <GotoFirstBtn disabled={currentPage === 1} onClick={goToFirstPage}/>
        <GotoPrevtBtn disabled={currentPage === 1} onClick={goToPreviousPage}/>
        {Array.from({ length: totalPages }).map((_, index) => (
          <NumberBtn
            key={index}
            onClick={() => handlePageClick(index + 1)}
            style={{
              color: currentPage === index + 1 ? '#00D749' : '#8D8D8D',
              border: currentPage === index + 1 ? '1px solid #00D749' : 'none',
            }}
          >
            {index + 1}
          </NumberBtn>
        ))}
        <GotoNexttBtn disabled={currentPage === totalPages} onClick={goToNextPage}/>
        <GotoLastBtn disabled={currentPage === totalPages} onClick={goToLastPage}/>
      </Paginaion>
    </div>
  );
}

export default LiveUpPagination;