
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import { IUserInfo } from "@/interface/user";
import { useModel } from "@umijs/max";
import './index.less'
import { MoreOutline } from 'antd-mobile-icons'
import { List, Popover, Image, NavBar, Space, Button } from "antd-mobile";
import { LikeOutline, MessageOutline  } from 'antd-mobile-icons'
import { ListItem } from "antd-mobile/es/components/list/list-item";

interface IDiscoverAction {
  userInfo: IUserInfo,
  action: any
}

const DiscoverFriend = () => {

  const { userInfo } = useModel('user');

  const friendsAction: IDiscoverAction[]  = [
    {
      userInfo,
      action: {
        type: 'text',
        content: '今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好'
      }
    },
    {
      userInfo,
      action: {
        type: 'text',
        content: '今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好'
      }
    },
    {
      userInfo,
      action: {
        type: 'text',
        content: '今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好'
      }
    },
    {
      userInfo,
      action: {
        type: 'text',
        content: '今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好'
      }
    },
    {
      userInfo,
      action: {
        type: 'text',
        content: '今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好今天的风景特别好'
      }
    },
  ]

  return <>
    <FixedTopBar>
      <NavBarBack title='朋友圈'></NavBarBack>
    </FixedTopBar>
    <List className='layout-scroll-content friend-list'>
      <List.Item>
        <Image src='https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/friend.webp' />
      </List.Item>
      {friendsAction.map(({userInfo, action}, index: number)=>(
        <List.Item
          key={index}
          prefix={
            <Image
              src={userInfo.avatar}
              style={{ borderRadius: 'var(--adm-radius-s)' }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={
            <>
              <>{ action.content }</>
              <NavBar
                className="friend-list-bottom"
                style={{ padding: '0', '--height': '21px'}}
                backArrow={'10分钟前'}
                right={

                  <Popover
                  key='leftTop'
                  mode="dark"
                  trigger='click'
                  content={
                    <Space style={{fontSize: '12px',  '--gap': '24px'}} >
                      <Space><LikeOutline />点赞</Space>
                      <Space><MessageOutline />评论</Space>
                    </Space>
                  }
                  placement='leftTop'
                >
                <MoreOutline />
                </Popover>
                } />
            </>
          }
        >
          <span className="friend-name">{userInfo.name}</span>
        </List.Item>
      ))}
    </List>
  </>
}

export default DiscoverFriend;
