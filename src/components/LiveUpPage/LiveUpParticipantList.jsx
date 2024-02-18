import React, { useState } from 'react';
import styled from 'styled-components';

import gofirst_arrow from '../../icon/arrow7.png'
import gofirst_arrow_disable from '../../icon/arrow11.png'
import goprev_arrow from '../../icon/arrow1.png'
import goprev_arrow_disable from '../../icon/arrow5.png'
import golast_arrow from '../../icon/arrow8.png'
import golast_arrow_disable from '../../icon/arrow9.png'
import gonext_arrow from '../../icon/arrow2.png'
import gonext_arrow_disable from '../../icon/arrow3.png'
import LiveupParticipantBox from './LiveupParticipantBox';

const Title = styled.p`
  color: #FFF;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  text-align: center;
`

const Label = styled.p`
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
`;

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

const NavItem = ({ label, selected, onClick }) => {
    return (
        <div
            style={{ opacity: selected ? 1 : 0.5, display: 'flex', cursor: 'pointer' }}
            onClick={onClick}
        >
            <Label>{label}</Label>
        </div>
    );
};

const navItems = ['전체', '🏅랭킹순', '😊이름순', '💚관심등록'];
function LiveUpParticipantList() {
  const [selectedNavItem, setSelectedNavItem] = useState('전체');
  const [filter, setfilter] = useState('전체');

    const handleNavItemClick = (label) => {
        setSelectedNavItem(label);
        if (label === "전체"){
            setfilter("전체");
            console.log("전체 선택")
        }else if(label === "🏅랭킹순"){
            setfilter("랭킹순");
            console.log("랭킹순")
        }else if(label === "😊이름순"){
            setfilter("이름순");
            console.log("이름순")
        }else if(label === "💚관심등록"){
            setfilter("관심등록");
            console.log("관심등록")
        }

  };

  const dummylist = [
    {
      bestUp: true,
      sevenDaysUp: true,
      nickName: "서머",
      like: true,
      photoUrl: null,
      time: "10:20:10",
    },
    {
      bestUp: false,
      sevenDaysUp: false,
      nickName: "바보",
      like: false,
      photoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8AAAD//v////0EAgAFAAD9//30v8T8///19PP8//z5+Pj//fz3v8b1v8ja2NnExMSLiont7e3k5OTW1NWko6JhYF/i4eG6uLc5NzZRUE//9/nQ0NDv7++/vryFg4ObmpgZFhd4d3ZYWFhMS0ptbGo1NDMqKSiwrq2gnp0iIB9BQUF1dHX/wc/46+sSEA8aGRg7ODn54uj00tr3ytLwwcvOoqbmt7zftroyIyJcREZsU1Sge4P75+3+x81PQD46Iia+kZfttsIgAwlcTE/aqrOpiIw+MC6Ma23WpK3RrLB6XV+VfoC/mp/6uMbrys43AEJTAAANyUlEQVR4nO1diXbayBJVI1ZLCAkQyCwWZjObwQvEyUzieeGNJ5mZF8///82rqhYYYQHGaJucvifHh4CAvurq6tq6kCQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYF3oGpZQ0uJehSBwTJGDHHZUqRE1IMJAIUxe0E56tEEgAvGUozN2i1jxpKMNaIezwEoBatcbu5+PfvqmSISPL/AJVi6QorF4EZ3OgpdLmrnpiS7X5ERCSnLGSYQzit9IFiR4XpZlnJ9oFjBR/FEqfeynCrqG980AIK3KjLEf1V8b2P79sQFOaLWMQc2o5nYQNEyzVatO+522narZQ7NRinnvNQBhvoLpQq81Y4rwwmupwI+KsyA6npvKxlXzAPnFVPXmw14NFNQgBEJqQUMOzFlqMNYa7Kk4grTYZxVfFKx2rTTpVIrYimCi+sYFt5qWfbgNk1iyhCYzHKOkkCB1aXqoM1e6KW6tUrndpNZKgkvJJPMkJw5hDefA8OLeDK0aGhp538gl5UOskgSl5HRyHHVo+Sa1XK5YRmT7popKF6aQtC2CnzKZSKedk0FVpYkOwzVG4cachwPShvXbQy+WR3CnegO1lMmw+6PisZj14weCnBxhgqyVnLY9cxGU6Gn1nIHs5WV0mk5zQWzudKpnBSoYdjxs9kYUsSVt5oqWTJR67QHXDBlVZZde3jW2f8TK9l8eamDMhvLKSSGL/8r2kbhXR/T6LR9GpDvyG3ugD8lkGErnlreH8iSARRz8bWZTwaoiz5jbd8YylvKKXrI5Mj2/fmwQqG5pWJjANXqkKHmhzFCW01DiteiHtzQBl+UEj5QtLiDGatoRoW7CAUp4QdDqU2BG9aJTTgjR6Gyno/jqfJbxob+feQpqF7hHdf9/VC9RvNYyR2+NHCYOJQr/wUKViO6j5GHTxXy8q5ypET9NZibIBtJdFgiRYkktJvjOtRnl6DUp+iA4e+nHocCLRZD8mWT8ICNUZ0oKSojJBiYGMlo7CJFn7XYEZigFA1OsmP2vRfNtg6uxZuoNOqAvYjQe5ZgwZrczs6NnWoYLdMmRuRwoUcBWoTn+Oh9k6ivQlXWrisw1K9TvLEWhVtWJS1DsYrdDJU9+2R1xbC393t6wDDFBhHY4WO8txN6mPAWUmUwmWFocBeq1kUxN7Dt0u5LAGoNv4hH0EOFhevjSiVuCc/on85D9ycuIRnjI0Bx/0QHgVuU0ZK0m6FJ2ZfziwOfkzjgjsD6o5vJ9s+0/7BQj5r4KCt5alIM7XZ9Eq0xT26EizFOoSLvVjIGm1l+uekWKbVwY5UXOIW2dLbnkhzo+nR6zwVHgAzUQ/LuK5QZ3tScfLZvo5eBYNofY9xEhmNfPurN3wgM29IZMdwlqD4yVG6Q4vvyBO8DOoUzmMJ9UuorJqhO2+Ht+jmcQluSw8uBDVCbXoZnuZHJDS5NeAwLlCoPz66pcOUdYh5TYfymhjSJCRRSvzXb3rHLsPKB4TAshg3u+PqARGHYqlQ69rCxfztHyw0cjEpYDE2/1oQxW5djjPaanTK6WsnwzJo2CGnyrWVre7B2gXF+bng9o2fGKZuWFXIwwgrYoE3aecuFRd20x+PeLnOrWZt17aFl9InlSig8GaYxYBNa1E25JIPmIBrrSsWdEuiwUfR2uwG2Uf3u/n4+v5vWPTaiNjKsnTDsI1Diau0AlMlGydNuvMxYtn6/yD8/a1o+v9Tu1G2KwxAZkirdGT1yUCAHf9y+aBYPO/ngBKelu0Umk8/n8Q/806ZbDHX81u77R30Mymgj7lpbMk/AY4UUW8UJD6p4LJP6ogGvDw/5jPb4mMlo19rUfU0D1dH5iUN/I8i935WglVVVRXXY6vcKXDO+wZgEhirM4MdPjD1oT7/88qQ9/fp5UXfNYikIM8N7NFS2nMp5jbt+N58vAPP7L/xS9IDfVnFwp2mPv8G8f1z8h7HPj98Y+3rnuqC4js4GjQSmS1hye3EBi+k8A5oCltA1/F3Q+NA9fJMZUl9o1x/gcz9rP+Dv1yVw/XrvuoIYjnzYhQ8iQRv+1dbEgLN7r4GW4MAHy3ki+/aamLqmXf/K2H817Xcgt0SGf2j1zSuaoTHk5dzbXyXL9/k1QeSoacs7Of2aoaoPvXQrMHzCecvnQT5/f1ziRLp1TQ5Pm4SkaWyK0bifk++1TObxMe/g4evTtabVYWa3GJYvGbv0OG9SX+b/AIYP+fyIsV+1B3ysTTffXETDNIy6RVhYLdSlW2ZKHfbpD9++P+czH57y109wC5ZafuqKtdE9MbytBVmdX//J2CfYML6yT39pj3+zTws3w2pYVlvWe7cAGf0Is6Ndw0w8XH+HWf4DGG5GiifsquDMREuSBv3xZs5GlkGXLp9oy19qiKdlfumSUp0lfXLZDoMcGbdNk1jk4baz/2lLmL2M9g0Y/pXJb6p7LM6cFYtUuz9q2Ns5tbS6eL4mAac1jLt/fuH6ilZo0bYE12pueVEXOIVsiVP4LY+r6DdYk6456DB+JCFJJe7w2LUa0/L0+VpzGALFjLb1dnr/LChSW6CdyZ0KAoafQUNco8b/+/FPeP1HXsu49C2vbU855yzY9pkKWf6y0DhBmsT8853rdcUJ7wXGyvVll6+sC3We/87Yd00Dnj+uP6ZAHWqa2yaRUEKTbFyVGhP22q6FbWU617ic4jpcTN0bTYMv/pCiGDUUGPeGePf88Mu3v2CETw+PsPP/ADGby66khYzRD9IyKOagi7eSarB1ngFH+Ahtubj/sr2T2ijcalgBUwPVmnvRw479OM+sNn2YiOeFmt4sswH7BsUb1m8CnBOvOk000iW1Pp1O6+prS6FGXndYDHUMmWxtanfLZ76MOEPY7s/Sm9lPYJiWxpizT2BFeN+7yIieymbPzraZNFHCX53aDAwq6sNtR+YO5YucV7S//1Flj8Rai5Le6DvaR1aioj9zqYQX1e+hmG6HE6f/5EHf0/wt7tVtc41QAG4TpUJhp+MYYk69FVRtmQcuvCwoWZ7ezxdgns7v6rt8io5z3suUEkclPUpOyUNoWQTKPaW2wrPEqV6vw43eKU1qjQgaVKByBEU8y1GRwkyUTLyDUZxYNrtnuZjjfo/L9zGDxRrPcOtMG1QXfLzyTkjrlPExBAubEeOQ0EddYx2tvYGdSl7UcfJWeWUmBg8swn5PTCHXvmQ9/cjiH52xkCsxEF3c9ffUrO2Ak4xpHfWmMcURw67cK1G2qyUdua/l6PTz6KgCfKoXOn5FnAydKB5rm4D9pV8cJ6S5GV+F4VdfDhiviwra0KCkU+8iiirhFlWZtwL+Fp26MGCdbdjFiSA1VHSyN3d2OtSNhhOdPW1vAkKL1qIhBei3GZQE7/E2S1fhr0WTKNYKgamBKjac0GENFmzuIYYOa0bHrw7lS9+NArOpJYNELts7NuDT0YCdH6ybIMtAnKSrHVJU3wVlgKcEU3QeIijIDqj5UNiV0NbluhiBHb76FMg8AhK2f0Hf2e/ZttFuB30OUmnzwzWhKlN02m7WCZoADZvmeb9GR8UHIR8NwpXfcHofBGq55dbHo0KLCHPgyi+G0tyhjMVVtygu4e74Pco+hNO+QilF0RgGg7TUdS5IhuGf59pAkw7WWReYwKjqgRjFsB1dRdnVZ1WaN+rfnH5EzQvoV0TbCJNaO6x8mwDkqQArPaRavV0oGx2HXyqIeG2LBe9gH4ZStkzzoozdf0t+T+PYI1ccOlY7fYKygv5OJE/HRN1fMCGtzm6hEedvrQQKaUhFwW8CprAv31RN+kZQUUusutHOqP7AP4Y2j3THhWEW45rcEvfpEylHqUueueQokM3iSRqsJfBrRCY/aOzXOdvTge0d8JyJXwxzI9oMX5VvRgdZVlNUJuPTiAwMU8aqSaGskjvV84mhU6UZH35O64Nkyq+YLZozo1gRJE/4xrem+MP4TSHB4s0dTu+7V0CCyZyaiF2/XZSt11WHR0O54p1v1Kht0tdoYG1s/+RfGakwykvGSI++AONv7PxEglSO1MPQYfzmUG7e4izaJ01iC821ruqcl4odyRx1dTkl2UYEU7wHbRzFVGrODjXCLLaMwc6UfJNaXs6oADmeBNeNBneOrkxxnbZ3OZV+g2++jU1nVm/wQpv+rmka8NBV14NiifeeNVQpNg6FN3R+oGKX/VY2DToO+irUa1JoElvrxlU+18CmtOhoDHdV9lEp3lYI5uKKJrAdWB9NX6F0eKT4clezOarE2ciq5qwxWzUK/ZfAHDnR8NpgfTCjWG2sCWPF6Iqh3qo554WS5VArnU8BdmgfUycLqmUyzIbOGyysGlh31xmJwvo8VBek+rjy76ihjzfzGiu0UMNgWjfFV6nu/BTN7iafcUbJOHfTIzJtq1F7qf7BNORoEl2X2ZNRHZh2fzQbsXPDKttsfT6PzZyMI6jQWTgntAOFIvHd7+WH2bpOOxo8CzWKcmh+gbx13OhKg3a327Ubkk4/syNT67dIc9lBwV6Z53YcUmgBoMhWfXnMCMrVwgDsETfc+jSjKRsNHDpbhUN7P+k6LKxScbnkT6JLt4HrsC2pKsZYWSvq0QSCGtUaSs0bhg2lf0bwiqoh/irkv9IgPQjZiecw/FWAuHv070WVrPJK6CdhwkTDasThh3IEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBARW+D/kU829Wk+e6gAAAABJRU5ErkJggg==",
      time: "04:22:56",
    },
    {
      bestUp: false,
      sevenDaysUp: true,
      nickName: "서머",
      like: true,
      photoUrl: null,
      time: "10:20:10",
    },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 한 페이지에 표시할 항목 수
  const totalPages = Math.ceil(dummylist.length / itemsPerPage); // 전체 페이지 수

  // 현재 페이지에 해당하는 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dummylist.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
  
    if (totalPages <= maxPagesToShow) {
      // 전체 페이지가 최대 페이지 수 이하이면 모든 페이지를 표시
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // 동적으로 표시할 페이지 번호의 범위
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
      // 끝 5개 표시
      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }
  
    return pageNumbers;
  };

  const handleDynamicPageClick = (direction) => {
    let newPage;
  
    if (direction === 'right') {
      newPage = Math.min(currentPage + 1, totalPages);
    } else if (direction === 'left') {
      newPage = Math.max(currentPage - 1, 1);
    } else if (direction === 'dynamicRight') {
      newPage = Math.min(currentPage + 5, totalPages);
    } else if (direction === 'dynamicLeft') {
      newPage = Math.max(currentPage - 5, 1);
    }
  
    setCurrentPage(newPage);
  };

    return (
      <>
        <div style={{ alignItems: 'center', gap: 30, display: 'inline-flex' }}>
        <Title>LIVE UP 참여자</Title>
            {navItems.map((item, index) => (
                <NavItem 
                    key={index}
                    label={item}
                    selected={selectedNavItem === item}
                    onClick={() => handleNavItemClick(item)} />
            ))}
        </div>

        <PostBoxContainer>
        {currentData.map((data, index) => (
            <LiveupParticipantBox
              key={index}
              like={data.like}
              bestUp={data.bestUp}
              sevenDaysUp={data.sevenDaysUp}
              nickName={data.nickName}
              photoUrl={data.photoUrl}
              time={data.time}
            />
        ))}
      </PostBoxContainer>

      <Paginaion>
        <GotoFirstBtn disabled={currentPage === 1} onClick={goToFirstPage} />
        <GotoPrevtBtn disabled={currentPage === 1} onClick={() => handleDynamicPageClick('left')} />
        {generatePageNumbers().map((page, index) => (
          <NumberBtn
            key={index}
            onClick={() => {
              if (typeof page === 'number') {
                handlePageClick(page);
              } else {
                const direction = page === '...' && index === 1 ? 'dynamicLeft' : 'dynamicRight';
                handleDynamicPageClick(direction);
              }
            }}
            style={{
              color: currentPage === page ? '#00D749' : '#8D8D8D',
              border: currentPage === page ? '1px solid #00D749' : 'none',
            }}
          >
            {page}
          </NumberBtn>
        ))}
        <GotoNexttBtn disabled={currentPage === totalPages} onClick={() => handleDynamicPageClick('right')}/>
        <GotoLastBtn disabled={currentPage === totalPages} onClick={goToLastPage}/>
      </Paginaion>
      </>
    );
}

export default LiveUpParticipantList