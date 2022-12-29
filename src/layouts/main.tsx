import MainTabBar from '@/components/MainTabBar';
import { Outlet } from 'umi';
export default () => {
  return (
    <>
      <Outlet />
      <MainTabBar></MainTabBar>
    </>
  );
}
