import { Grid, Space } from "antd-mobile";
import { useEffect, useRef, useState } from "react";
import './index.less'
import { CameraOutline, SoundMuteOutline, SoundOutline, AudioMutedOutline, PhoneFill, AudioOutline } from 'antd-mobile-icons'

const DiscoverVideo = () => {
  const videoTag = useRef<HTMLVideoElement>(null)
  useEffect(()=>{
    const constraints = {
      audio: true,
      video: { width: window.innerWidth, height: window.outerHeight }
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      const video = videoTag.current;
      // if (video) {
      //   video.srcObject = mediaStream;
      //   video.onloadedmetadata = function(e) {
      //     video.play();
      //   };
      // }
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); })

  }, [])
  const [ soundMute, setSoundMute ] = useState<boolean>(false);
  const [ audioMute, setAudioMute ] = useState<boolean>(false);
  const [ phoneStatus, setPhoneStatus ] = useState<boolean>(false);
  return <>
    <video ref={videoTag} ></video>
    <Space direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <Grid className="user-grid" columns={3} gap={8} style={{'padding': '0px 8px'}}>
          <Grid.Item>
            <span className="user-grid-item">
              <CameraOutline />
            </span>
          </Grid.Item>
          <Grid.Item>
            <span className={`user-grid-item ${soundMute && 'red'}`} onClick={()=> setSoundMute(!soundMute) }>
              { soundMute? <SoundMuteOutline color="var(--adm-color-danger)" /> :  <SoundOutline /> }
            </span>
          </Grid.Item>
          <Grid.Item>
            <span className={`user-grid-item ${audioMute && 'red'}`} onClick={()=> setAudioMute(!audioMute) }>
              { audioMute ? <AudioMutedOutline color="var(--adm-color-danger)" /> : <AudioOutline /> }
            </span>
          </Grid.Item>
          <Grid.Item span={3}>
            <span className={`user-grid-item ${phoneStatus && 'red'}`} onTouchStart={()=> setPhoneStatus(true)} onTouchEnd={()=> setPhoneStatus(false)}>
              <PhoneFill color={ phoneStatus ? 'red' : '#000' } />
            </span>
          </Grid.Item>
        </Grid>
    </Space>
  </>
}

export default DiscoverVideo;
