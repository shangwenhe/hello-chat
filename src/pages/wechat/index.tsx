import React, { useEffect, useState } from 'react'
import { Image, List, NavBar, Space } from 'antd-mobile'
import { history } from '@umijs/max';
import NavBarMenu from '@/components/NavBarMenu';
import { getWeChartList } from '@/api/chat';
import { IChatInfo } from '@/interface/chat';
import './index.less'
import { BellMuteOutline  } from 'antd-mobile-icons'
import FixedTopBar from '@/components/FixedTopBar';

export default () => {

  const [users, setUsers ] = useState<IChatInfo[]>([])


  useEffect(()=>{
    getWeChartList().then(({ data })=>{

      setUsers([ ...data ]);
    })
  }, [])

  const openIM = (user: IChatInfo)=>{
    history.push({
      pathname: `/wechat/${user.id}`
    })
  }

  const chatTitleRight = (
    <div style={{ fontSize: 12 }}>
      <Space style={{ '--gap': '4px' }}>
        <>10:09</>
        <BellMuteOutline />
      </Space>
    </div>
  )

  return (
    <>
      <FixedTopBar>
        <NavBarMenu title='消息'></NavBarMenu>
      </FixedTopBar>
      <List className='layout-scroll-content'>
        {users.map((user, index: number) => (
          <List.Item
            key={user.name + index}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 'var(--adm-radius-s)' }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            arrow={false}
            description={user.description}
            onClick={()=>{openIM(user)}}
          >
            <NavBar
              backArrow={user.name}
              className='char-list-bar'
              right={chatTitleRight} />
          </List.Item>
        ))}
      </List>
    </>

  )
}
