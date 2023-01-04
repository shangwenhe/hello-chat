import MainTabBar from '@/components/MainTabBar';
import { Outlet } from '@umijs/max';
export default () => {
  return (
    <>
      <Outlet/>
      <MainTabBar ></MainTabBar>
    </>
  );
}
