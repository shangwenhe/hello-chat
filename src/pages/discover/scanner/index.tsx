import { ErrorBlock, Space } from "antd-mobile";
import { useEffect } from "react";

const DiscoverVideo = () => {
  useEffect(()=>{
    const camera = navigator?.camera as Camera;
    console.log(navigator.camera)
    camera.getPicture((data)=>{
      console.log('getPicture success', data);
    },(error)=>{
      console.log('getPicture error', error);
    }, {})
  }, [])
  return <>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverVideo;
