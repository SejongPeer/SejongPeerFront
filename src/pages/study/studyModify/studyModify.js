import { useEffect, useState } from 'react';
import StudyPostWrite from '../studyPostWrite/StudyPostWrite';

const StudyModify = () => {
  const studyId = 2;
  //const {studyId} = useParams();
  //console.log("studyId : ",studyId);
  const [studyData, setStudyData] = useState(null);

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

  return studyData ? (
    <StudyPostWrite
      title={studyData.data.title}
      categoryName={studyData.data.categoryName}
      recruitmentStart={studyData.data.recruitmentStart}
      recruitmentEnd={studyData.data.recruitmentEnd}
      numberOfApplicants={studyData.data.numberOfApplicants}
      content={studyData.data.content}
      imgUrl={studyData.data.imgUrl}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default StudyModify;
