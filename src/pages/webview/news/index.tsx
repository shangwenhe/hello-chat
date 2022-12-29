import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import styles from './index.less';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'


export default function Page() {
  

  const [activeKey, setActiveKey] = useState('todo')

  return (
    <>
      news 这是一条新闻区域
    </>
  );
}
