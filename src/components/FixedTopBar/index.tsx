
import { FC } from 'react';
import styles from './index.less'
interface FixedTopBarProps {
  children?: JSX.Element
}

const FixedTopBar:FC<FixedTopBarProps> = ({ children }) => {
  return <div className={styles['fix-top']}>
    {children}
  </div>
}
export default FixedTopBar;
