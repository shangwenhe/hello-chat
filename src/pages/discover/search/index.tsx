
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const DiscoverSearch = () => {
  return <>
    <NavBarBack title='搜一搜'></NavBarBack>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverSearch;
