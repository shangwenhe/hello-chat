
import { NavBar, Space } from "antd-mobile";
import { FC } from "react";
import { SearchOutline } from 'antd-mobile-icons'
import styles from '@/components/NavBarBack/index.less'
import { history } from "@umijs/max";
interface NavBarBackProps {
  title: string;
}
const NavBarBack:FC<NavBarBackProps> = ({title}) => {

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline onClick={()=> {
          history.push({
            pathname: `/search`
          })
        }} />
      </Space>
    </div>
  )

  return <>
    <NavBar
      className={styles.navbar}
      style={{'--height': 'var(--top-fixed-bar)'}}
      onBack={()=>{
        history.back();
      }}
      right={right}>{title}</NavBar>
  </>
}

export default NavBarBack;
