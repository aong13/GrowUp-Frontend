// apiData.js
import axios from 'axios';

let selectedOption = null;
let selectedIndex = null;
let selectStartDate = null;
let selectEndDate = null;
let selectTitle = null;
let selectContent = null;

const defaultBody = {
  recruitmentId: 1,
  numberId: 1,
  periodId: 1,
  startDate: 1,
  endDate: 1,
  categoryDetailIds: [],
  title: "GrowRoom 제목",
  content: "GrowRoom 내용"
};

const setApiData = (option, index) => {
  selectedOption = option;
  selectedIndex = index + 1;

  // selectedOption에 따라 defaultBody 업데이트
  if (selectedOption === 1) {
    defaultBody.recruitmentId = selectedIndex;
  } else if (selectedOption === 2) {
    defaultBody.numberId = selectedIndex;
  } else if (selectedOption === 3) {
    defaultBody.periodId = selectedIndex;
  } else if (selectedOption >= 4 && selectedOption <= 8) {
    defaultBody.categoryDetailIds.push(selectedIndex);
  }
};

const setApiDate = (startDate, endDate) =>{
  selectStartDate = startDate;
  selectEndDate = endDate;

  defaultBody.startDate = selectStartDate;
  defaultBody.endDate = selectEndDate;
}

const setApiForm = async (title, content) => {
  selectTitle = title;
  selectContent = content;

  defaultBody.title = selectTitle;
  defaultBody.content = selectContent;

  const accessToken = 'eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUsInJvbGVzIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA3NzUzOTk2LCJleHAiOjE3MDc3NTQyOTZ9.Sg9-5aSCx3Q6lwb4a8siZL0cQpo9o1MtLjw56Tp97C8'; 

  try {
    const response = await axios.post(
      'https://dev.jojoumc.shop/growup/growroom',
      defaultBody, {
        headers: {
          Authorization: `${accessToken}`, 
        },
      }
    );

    console.log('서버 응답:', response.data);

    console.log('메뉴 닫기');

  } catch (error) {
    console.error('서버에 선택된 값을 보내는 중 오류가 발생했습니다:', error);
  }
};

export { defaultBody, setApiData, setApiDate, setApiForm };