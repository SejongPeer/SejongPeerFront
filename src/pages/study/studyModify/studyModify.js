import { useEffect, useState } from 'react';
import StudyPostWrite from '../studyPostWrite/StudyPostWrite';
import usePostStore from '../studyPostWrite/usePostStore';
import useStudyInfoStore from '../useStudyInfoStore';

const StudyModify = () => {
  const studyId = 1;
  //const {studyId} = useParams();
  //console.log("studyId : ",studyId);
  const [studyData, setStudyData] = useState(null);

  const {
    title,
    setTitle,
    category,
    setCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    memberNum,
    setMemberNum,
    selectedWay,
    setSelectedWay,
    selectedFrequency,
    setSelectedFrequency,
    questionLink,
    setQuestionLink,
    images,
    addImage,
    content,
    setContent,
    studyLink,
    setStudyLink,
    tags,
    setTags
  } = usePostStore();
  const { studyType } = useStudyInfoStore();

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACK_SERVER + `/study/post/${studyId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setStudyData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

    fetchStudyData();
  }, [studyId]);

  useEffect(() => {
    if (studyData) {
      setTitle(studyData.data.title);
      setCategory(studyData.data.categoryName);
      setStartDate(studyData.data.recruitmentStart);
      setEndDate(studyData.data.recruitmentEnd);
      setMemberNum(studyData.data.totalRecruitmentCount);
      setContent(studyData.data.content);
      //setSelectedWay(studyData.data.studyFrequency);
      setQuestionLink(studyData.data.questionKakaoLink);
    }
  }, [studyData]);

  const modifyHandler = () => {
    
  }

  return studyData ? (
    <StudyPostWrite/>
  ) : (
    <div>Loading...</div>
  );
};

export default StudyModify;
