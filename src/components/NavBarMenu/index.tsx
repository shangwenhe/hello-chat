
import { Mask, NavBar, Popover, Space, Toast } from "antd-mobile";
import { FC, useState } from "react";
import {
  SearchOutline,
  AddCircleOutline,
  ScanningOutline,
  HandPayCircleOutline,
  TransportQRcodeOutline,
  AntOutline
} from 'antd-mobile-icons'
import { Action } from "antd-mobile/es/components/popover";
import styles from './index'
interface NavBarMenuProps {
  title: string;
}
const NavBarMenu:FC<NavBarMenuProps> = ({title}) => {
  const [visible, setVisible] = useState(false);
  const actions: Action[] = [
    { key: 'scan', icon: <ScanningOutline />, text: '扫一扫' },
    { key: 'payment', icon: <HandPayCircleOutline />, text: '付钱/收钱' },
    { key: 'bus', icon: <TransportQRcodeOutline />, text: '乘车码' },
    { key: 'assistant', icon: <AntOutline />, text: '智能助理' },
  ]

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <Popover.Menu
          actions={actions}
          placement='topLeft'
          mode="dark"
          visible={visible}
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
          onVisibleChange={setVisible}
        >
          <AddCircleOutline />
        </Popover.Menu>
      </Space>
    </div>
  )

  return <>

    <NavBar style={{'--height': '58px'}} backArrow={false} right={right}>{title}</NavBar>
    <Mask
      color='white'
      visible={visible}
      opacity={0.1}
      onMaskClick={() => setVisible(false)}
      />
  </>
}

export default NavBarMenu;
