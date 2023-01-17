import { Grid, Space } from "antd-mobile";
import { useEffect, useRef, useState } from "react";
import './index.less'
import { RedoOutline, SoundMuteOutline, SoundOutline, AudioMutedOutline, PhoneFill, AudioOutline } from 'antd-mobile-icons'

type GetUserMedia = (device: MediaDeviceInfo) => void;

const DiscoverVideo = () => {
  const videoTag = useRef<HTMLVideoElement>(null);
  const [ videoInput, setVideoInput] = useState<MediaDeviceInfo[]>([]);

  const [ facingMode, setFacingMode ] = useState<number>(0);

  const trackStop = () => {
    const video = videoTag.current;
    if(video) {
      const mediaStream = video.srcObject as MediaStream
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      }
    }
  }

  const getUserMedia: GetUserMedia = (device: MediaDeviceInfo) => {

    // const orientation = window.screen.orientation;
    trackStop()
    let width = { ideal: window.innerWidth }
    let height = { ideal: window.innerHeight }
    if (/Application\/helloChat/.test(window.navigator.userAgent)) {
      [ width, height ] =  [ height, width ]
    }

    const constraints: MediaStreamConstraints = {
      audio: false,
      video: {
        width,
        height,
        frameRate: { ideal: 10, max: 15 },
        aspectRatio: {
          ideal: window.outerWidth/window.outerHeight
        },
        deviceId: device.deviceId
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      const video = videoTag.current;
      if (video) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
        video.width = window.outerWidth;
        video.height = window.outerHeight;
      }
    })
    .catch(function(err) {
      console.log("GetUserMedia::Catch", err.name + ": " + err.message);
    })
  }

  useEffect(()=>{
    navigator.mediaDevices.enumerateDevices().then(( mediaDevices :MediaDeviceInfo[])=>{
      const videoDevice: MediaDeviceInfo[]  = [];
      mediaDevices.forEach((device)=>{
        if (device.kind === 'videoinput'){
          videoDevice.push(device)
        }
      })
      setVideoInput([...videoDevice])
    })
    return trackStop;
  }, [])


  useEffect(()=>{
    if (videoInput.length > 0) {
      console.log('videoInput',videoInput[facingMode % videoInput.length], facingMode % videoInput.length )
      getUserMedia(videoInput[facingMode % videoInput.length]);
    }

  }, [videoInput, facingMode]);

  const [ soundMute, setSoundMute ] = useState<boolean>(false);
  const [ audioMute, setAudioMute ] = useState<boolean>(false);
  const [ phoneStatus, setPhoneStatus ] = useState<boolean>(false);

  const hangup = () => {
    setPhoneStatus(false);
    history.back()
  }
  return <>
    <video id="call-id" ref={videoTag} ></video>
    <Space className="call-actions" direction='vertical' block style={{ '--gap': '1em', backgroundColor: "transparent" }}>
      <Grid className="user-grid" columns={3} gap={8}>
          <Grid.Item>
            <span className="user-grid-item" onClick={ () => {setFacingMode(facingMode+1)}}>
              <RedoOutline  color="#ffffff" />
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
