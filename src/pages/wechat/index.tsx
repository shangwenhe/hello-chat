import React, { useState } from 'react'
import { Image, List } from 'antd-mobile'
import { history } from 'umi';
import NavBarMenu from '@/components/NavBarMenu';

interface IUserInfo {
  avatar: string,
  name: string,
  description: string,
  id: string;
}

const userData: IUserInfo[] = [
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
    id: '1',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
    id: '2',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
    id: '3',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
    id: '4',
  },
]
export default () => {

  const [users, setUsers ] = useState<IUserInfo[]>([
    ...userData,
    ...userData,
    ...userData,
    ...userData,
  ])

  const openIM = (user: IUserInfo)=>{
    history.push({
      pathname: `/wechat/${user.id}`
    })
  }

  return (
    <>
      <NavBarMenu title='我的消息'></NavBarMenu>
      <List>
        {users.map((user, index: number) => (
          <List.Item
            key={user.name + index}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
                onClick={()=>{openIM(user)}}
              />
            }
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </>

  )
}
