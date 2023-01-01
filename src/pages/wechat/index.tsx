import React, { useEffect, useState } from 'react'
import { Image, List } from 'antd-mobile'
import { history } from 'umi';
import NavBarMenu from '@/components/NavBarMenu';
import { getWeChartList } from '@/api/chat';
import { IChatInfo } from '@/interface/chat';



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

  return (
    <>
      <NavBarMenu title='消息'></NavBarMenu>
      <List className='layout-scroll-content'>
        {users.map((user, index: number) => (
          <List.Item
            key={user.name + index}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 5 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            arrow={false}
            description={user.description}
            onClick={()=>{openIM(user)}}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </>

  )
}
