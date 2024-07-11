import styled from 'styled-components';

import Title from './studyRequirement/Title';
import Category from './studyRequirement/Category';
import RecruitDate from './studyRequirement/RecruitDate';

import style from './StudyRequirement.module.css';
import RecruitMember from './studyRequirement/RecruitMember';
import MeetingWay from './studyRequirement/MeetingWay';
import DateFrequency from './studyRequirement/DateFrequency';

const StudyRequirement = ({
  studyFilterHandler,
  memberFilterHandler,
  handleDatePickerFocus,
}) => {
  return (
    <div className={style.topBox}>
      <RequireContainer>
        <Title />
      </RequireContainer>

      <RequireContainer>
        <Category studyFilterHandler={studyFilterHandler} />
      </RequireContainer>

      <RequireContainer>
        <RecruitDate handleDatePickerFocus={handleDatePickerFocus} />
      </RequireContainer>

      <RequireContainer>
        <RecruitMember memberFilterHandler={memberFilterHandler} />
      </RequireContainer>

      <RequireContainer>
        <DateFrequency />
      </RequireContainer>
      <RequireContainer>
        <MeetingWay />
      </RequireContainer>
    </div>
  );
};

export default StudyRequirement;

const RequireContainer = styled.div`
  width: 28vw;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px #e5e5e5 solid;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    border-bottom: 1px #e5e5e5 solid;
    display: flex;
    align-items: center;
  }
`;
