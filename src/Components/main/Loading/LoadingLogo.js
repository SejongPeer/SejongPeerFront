import ReactPlayer from "react-player/lazy";
import loading1 from "../../../Assets/LogoSejongCat.mp4";
//import loading from "../../../Assets/loadinglogo.gif";
import { useNavigate } from "react-router-dom";

const Loadinglogo = () => {
  const navigate = useNavigate();
  const MainHandler = () => {
    navigate("/main");
  };
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={loading1} // 플레이어 url
          width="350px" // 플레이어 크기 (가로)
          height="350px" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 소리 on
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={false} // pip 모드 설정 여부
          playsinline={true}
          poster={loading1} // 플레이어 초기 포스터 사진
          onEnded={MainHandler}
        />
      </div>
    </>
  );
};

export default Loadinglogo;
