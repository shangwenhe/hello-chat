import { show } from 'antd-mobile/es/components/dialog/show';
import { Outlet } from '@umijs/max';
import './index.less'

export default () => {
  window.addEventListener('statusTap', function() {
    StatusBar.show();
    // scroll-up with document.body.scrollTop = 0; or do whatever you want
  });

  return (
    <>
      <Outlet />
    </>
  );
}
