
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import { ErrorBlock, Space } from "antd-mobile";

const DiscoverSearch = () => {
  if (/Application\/helloChat/.test(window.navigator.userAgent)) {
    const url = 'https://m.baidu.com/';
		const target = '_blank';
		const options =   'location=no';
    cordova.InAppBrowser.open(url, target, options);
  }

  return <>
    <FixedTopBar>
      <NavBarBack title='搜一搜'></NavBarBack>
    </FixedTopBar>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <ErrorBlock fullPage status='empty' />
    </Space>
  </>
}

export default DiscoverSearch;
