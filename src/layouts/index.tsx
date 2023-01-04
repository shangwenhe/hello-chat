import { Outlet } from 'umi';
import './index.less'
export default () => {

  window.addEventListener('statusTap', function() {
    // scroll-up with document.body.scrollTop = 0; or do whatever you want
    StatusBar.show();
  });

  return (
    <>
      <Outlet />
    </>
  );
}
