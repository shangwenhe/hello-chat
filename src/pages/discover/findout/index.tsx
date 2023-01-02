
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const DiscoverFindout = () => {
  return <>
    <NavBarBack title='看一看'></NavBarBack>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverFindout;
