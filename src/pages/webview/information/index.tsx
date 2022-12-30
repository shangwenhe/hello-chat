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
import IMInput from './IMInput';


export default function Page() {


  const [activeKey, setActiveKey] = useState('todo')

  return (
    <>
      <IMInput></IMInput>
    </>
  );
}
