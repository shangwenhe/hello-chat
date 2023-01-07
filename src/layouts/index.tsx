
import { Outlet } from '@umijs/max';
import './index.less'

export default () => {
  document.addEventListener('deviceready', ()=> {
    const { StatusBarHeight } = cordova.plugins;
    // StatusBar.show();
    StatusBarHeight?.getValue(
      function(value) {
        const pdr = window.devicePixelRatio; // 获取设备独立像素比
        const px = value * pdr;
        const body = document.querySelector('body');
        body?.style.setProperty('height', `${px}px`, 'important');
        console.log('event:: deviceready StatusBarHeight', px);
      },
      function(error) {
          console.log(error);
      })
  }, false);

  return (
    <>
      <Outlet />
    </>
  );
}
