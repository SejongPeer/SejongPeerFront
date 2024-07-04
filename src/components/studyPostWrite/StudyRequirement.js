import styled from 'styled-components';

import Title from './studyRequirement/Title';
import Category from './studyRequirement/Category';
import RecruitDate from './studyRequirement/RecruitDate';

import style from './StudyRequirement.module.css';
import RecruitMember from './studyRequirement/RecruitMember';
import MeetingWay from './studyRequirement/MeetingWay';
import DateFrequency from './studyRequirement/DateFrequency';


const StudyRequirement = ({
    startDate,
    endDate,
    setChangeDate,
    dateRange,
    format,
    startMember,
    endMember,
    studyFilterHandler,
    memberFilterHandler,
    handleDatePickerFocus,
    selectedWay, 
    handleWayClick,
    seletedFrequency,
    handleFrequencyClick
}) => {
    return (
        <div className={style.topBox}>
            <RequireContainer>
              <Title />
            </RequireContainer>

            <RequireContainer>
                <Category 
                    studyFilterHandler={studyFilterHandler}
                />
            </RequireContainer>

            <RequireContainer>
                <RecruitDate 
                    startDate={startDate}
                    endDate={endDate}
                    setChangeDate={setChangeDate}
                    dateRange={dateRange}
                    format={format}
                    handleDatePickerFocus={handleDatePickerFocus}
                />
            </RequireContainer>

            <RequireContainer>
                <RecruitMember 
                    memberFilterHandler={memberFilterHandler}
                    startMember={startMember}
                    endMember={endMember}
                />
            </RequireContainer>

            <RequireContainer>
                <DateFrequency 
                    seletedFrequency={seletedFrequency}
                    handleFrequencyClick={handleFrequencyClick}
                />
            </RequireContainer>
            <RequireContainer>
                <MeetingWay 
                    selectedWay={selectedWay}
                    handleWayClick={handleWayClick}
                    seletedFrequency={seletedFrequency}         handleFrequencyClick={handleFrequencyClick}
                />
            </RequireContainer>
        </div>
    );
}

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