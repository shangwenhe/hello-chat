import React, { useEffect, useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {
  CompassOutline,
  MessageOutline,
  UnorderedListOutline,
  UserSetOutline,
} from 'antd-mobile-icons'

import style from './index.less'
import { history, useLocation, useModel } from '@umijs/max'

export default function MainTabBar() {

  const { pathname } = useLocation();

  const [activeKey, setActiveKey] = useState(pathname);
  const { badges } = useModel('barbadge');

  useEffect(()=>{
    history.push(activeKey);
  }, [activeKey])

  const tabs = [
    {
      key: '/wechat',
      title: '消息',
      icon: <MessageOutline />,
      badge: badges.wechat,
    },

    {
      key: '/contacts',
      title: '通讯录',
      icon: <UnorderedListOutline />,
      badge: badges.contacts,
    },
    {
      key: '/discover',
      title: '发现',
      icon: <CompassOutline />,
      badge: badges.discover,
    },
    {
      key: '/user',
      title: '个人中心',
      icon: <UserSetOutline />,
      badge: badges.user,
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
