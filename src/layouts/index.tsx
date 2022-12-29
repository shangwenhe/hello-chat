import MainTabBar from '@/components/MainTabBar';
import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
      <MainTabBar></MainTabBar>
    </div>
  );
}
