
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const DiscoverVideo = () => {
  return <>
    <NavBarBack title='视频号'></NavBarBack>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverVideo;
