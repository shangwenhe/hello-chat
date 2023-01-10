
import { FC } from 'react';
import styles from './index.less'
interface FixedTopBarProps {
  children?: JSX.Element
  className?: string | undefined;
}

const FixedTopBar:FC<FixedTopBarProps> = ({ className, children }) => {
  return <div className={`${styles['fix-top']} ${className}`}>
    {children}
  </div>
}
export default FixedTopBar;
