
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const UserService = () => {
  return <>
    <NavBarBack title='服务'></NavBarBack>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default UserService;
