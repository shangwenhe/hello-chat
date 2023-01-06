import { IUserInfo } from "@/interface/user"
import { Avatar, List } from "antd-mobile"
import { FC, useState } from "react"
import '@/components/UserCard/index.less'


interface IUserCard  {
  user: IUserInfo
}

const UserCard:FC<IUserCard> = (props: IUserCard ) => {
  const [ avatar, setAvatar] = useState<string>('https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg')
  return <>
    <List>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src={ avatar } style={{ '--size': '64px' }}   />}
        description={
          <>
            昵称: 华北<br/>
            微信号: 腿毛怪叔叔<br/>
            地区: 河北 廊坊
          </>
        }
      >
        醉榻天下
      </List.Item>
    </List>
  </>
}
export default UserCard;
