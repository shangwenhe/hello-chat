
import { Outlet } from '@umijs/max';
import './index.less'

export default () => {
  document.addEventListener('deviceready', ()=> {
    const { StatusBarHeight } = cordova.plugins;
    // StatusBar.show();
    StatusBarHeight?.getValue(
      function(value) {
        const height = value - 5;
        if (height > 0){
          const body = document.querySelector('body');
          body?.style.setProperty('--status-bar-height', `${height}px`, 'important');
          console.log('event:: deviceready StatusBarHeight', height);
        }
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
