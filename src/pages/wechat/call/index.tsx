import { Grid, Space } from "antd-mobile";
import { useEffect, useRef, useState } from "react";
import './index.less'
import { CameraOutline, SoundMuteOutline, SoundOutline, AudioMutedOutline, PhoneFill, AudioOutline } from 'antd-mobile-icons'

const DiscoverVideo = () => {
  const videoTag = useRef<HTMLVideoElement>(null)
  useEffect(()=>{
    const constraints = {
      audio: false,
      video: { width: window.innerWidth, height: window.outerHeight }
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      const video = videoTag.current;
      if (video) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      }
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); })
    return () => {
    }
  }, [])
  const [ soundMute, setSoundMute ] = useState<boolean>(false);
  const [ audioMute, setAudioMute ] = useState<boolean>(false);
  const [ phoneStatus, setPhoneStatus ] = useState<boolean>(false);

  const hangup = () => {
    setPhoneStatus(false);
    history.back()
  }
  return <>
    <video ref={videoTag} ></video>
    <Space className="call-actions" direction='vertical' block style={{ '--gap': '1em', backgroundColor: "transparent" }}>
      <Grid className="user-grid" columns={3} gap={8}>
          <Grid.Item>
            <span className="user-grid-item">
              <CameraOutline color="#ffffff" />
            </span>
          </Grid.Item>
          <Grid.Item>
            <span className={`user-grid-item ${soundMute && 'red'}`} onClick={()=> setSoundMute(!soundMute) }>
              { soundMute? <SoundMuteOutline color="var(--adm-color-danger)" /> :  <SoundOutline color="#ffffff" /> }
            </span>
          </Grid.Item>
          <Grid.Item>
            <span className={`user-grid-item ${audioMute && 'red'}`} onClick={()=> setAudioMute(!audioMute) }>
              { audioMute ? <AudioMutedOutline color="var(--adm-color-danger)" /> : <AudioOutline color="#ffffff" /> }
            </span>
          </Grid.Item>
          <Grid.Item span={3}>
            <span className={`user-grid-item ${phoneStatus && 'red'}`} onTouchStart={()=> setPhoneStatus(true)} onTouchEnd={hangup}>
              <PhoneFill color={ phoneStatus ? 'red' : '#ffffff' } />
            </span>
          </Grid.Item>
        </Grid>
    </Space>
  </>
}

export default DiscoverVideo;
