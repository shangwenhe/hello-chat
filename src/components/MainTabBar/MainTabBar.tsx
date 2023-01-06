import React, { useEffect, useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {
  CompassOutline,
  MessageOutline,
  UnorderedListOutline,
  UserSetOutline,
} from 'antd-mobile-icons'

import style from '@/components/MainTabBar/index.less'
import { history, useLocation } from '@umijs/max'

export default function MainTabBar() {

  const { pathname } = useLocation();

  const [activeKey, setActiveKey] = useState(pathname)

  useEffect(()=>{
    history.push(activeKey);
  }, [activeKey])

  const tabs = [
    {
      key: '/wechat',
      title: '消息',
      icon: <MessageOutline />,
      badge: '99+',
    },

    {
      key: '/contacts',
      title: '通讯录',
      icon: <UnorderedListOutline />,
      badge: '9',
    },
    {
      key: '/discover',
      title: '发现',
      icon: <CompassOutline />,
      badge: Badge.dot,
    },
    {
      key: '/user',
      title: '个人中心',
      icon: <UserSetOutline />,
    },
  ]


  return (
    <>
      <TabBar className={style.tabbar}  activeKey={activeKey} onChange={setActiveKey} safeArea >
        {tabs.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </>
  );
}
