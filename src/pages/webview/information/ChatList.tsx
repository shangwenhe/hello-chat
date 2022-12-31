
import { List, Avatar } from 'antd-mobile'
import ChatPopover from './ChatPopover'
import { IUserChat, IUserInfo } from '@/interface/user'
import './index.less'
import styles from './index.less'
import { useRef } from 'react'
import { useEffect } from 'react'

interface IChatListPorps {
  currentUser: IUserInfo,
  userChat: IUserChat[]
}

export default ({ currentUser, userChat }: IChatListPorps) => {
  const chatListEle = useRef<{ nativeElement: HTMLInputElement } | null>(null);
  useEffect(()=>{
    const chatList =  chatListEle.current;
    if (chatList){
      if (chatList.nativeElement) {
        const item = chatList?.nativeElement.querySelector('.adm-list-item:last-child')
        item?.scrollIntoView()
      }
    }
  }, [userChat])

  return <>
      <List ref={chatListEle} className='wechat-list' style={{'--border-inner': 'none','--border-bottom': 'none', '--border-top': 'none', '--align-items':'flex-start' }} >
        {userChat.map((item:IUserChat, index: number)=> (
          <List.Item key={index} className='infomation'
            prefix={ item.user.id !== currentUser.id && <Avatar className={styles.avatar} src={item.user.avatar} /> }
            extra={ item.user.id === currentUser.id && <Avatar className={styles.avatar} src={item.user.avatar} />}
          >
            <ChatPopover content={item.content} placement={(item.user.id === currentUser.id? 'right': 'left')}></ChatPopover>
          </List.Item>
        ))}
      </List>
    </>
}
