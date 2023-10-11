import ReactPlayer from 'react-player/lazy';
import loading1 from './flower.mp4';
import loading from './buddyFlower.png';
import buddy from './buddyStart.module.css';


const buddyStart = () => {
    return (
        <>
            <div className={buddy.wrapper}>
                <ReactPlayer
                    className='react-player'
                    url={loading1}    // 플레이어 url
                    width='200px'         // 플레이어 크기 (가로)
                    height='400px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 소리 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={false}            // pip 모드 설정 여부
                    playsinline={true}
                    poster={loading}   // 플레이어 초기 포스터 사진
                />
            </div>
        </>
    )
}

export default buddyStart;