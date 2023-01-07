
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const DiscoverFindout = () => {
  return <>
    <FixedTopBar>
      <NavBarBack title='看一看'></NavBarBack>
    </FixedTopBar>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em' }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverFindout;
