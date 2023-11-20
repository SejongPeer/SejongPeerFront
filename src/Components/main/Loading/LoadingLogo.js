import ReactPlayer from "react-player/lazy";
import loading1 from "../../../Assets/LogoSejongCat.mp4";
import loading from "../../../Assets/loadinglogo.gif";
import { useNavigate } from "react-router-dom";

const Loadinglogo = () => {
  const navigate = useNavigate();
  const MainHandler = () => {
    navigate("/main");
  };

  return (
    <>
      <div
        className="player-wrapper"
        style={{ position: "fixed", top: "80px" }}
      >
        <ReactPlayer
          style={{ position: "relative", top: "80px" }}
          className="react-player"
          url={loading1}
          width="350px"
          height="350px"
          playing={true}
          muted={true}
          controls={false}
          light={false}
          pip={false}
          playsinline={true}
          poster={loading1}
          onEnded={MainHandler}
        />
      </div>
    </>
  );
};

export default Loadinglogo;
