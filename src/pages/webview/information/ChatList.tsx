
import { Grid, AutoCenter, Input, Button, List, Avatar, Popover } from 'antd-mobile'
import './index.less'
import styles from './index.less'
import { AudioOutline, AddCircleOutline, SmileOutline  } from 'antd-mobile-icons'
import { useEffect, useRef, useState } from 'react'
import ChatPopover from './ChatPopover'

const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';


interface IUserInfo {
  name: string,
  avatar: string,
  id: number
}

interface IUserChat {
  content: string,
  type: string,
  time: string,
  user: IUserInfo
}


export default () => {

  const content = 'infoi nfoin foinfoi foinfoi nfoin fo';

  const currentUser: IUserInfo = {
    name: '张三',
    id: 10,
    avatar,
  }

  const userChat: IUserChat[] = [
    {
      content: "你好！",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 1000
      }
    },
    {
      content: "你好！",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 1000
      }
    },
    {
      content: "你好！",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },
    {
      content: "请问有什么可以帮助你的吗？",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },
    {
      content: "请留一下你的电话我们可以联系你",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },
    {
      content: "15810111111",
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 1000
      }
    },
    {
      content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。如果你使用服务端渲染，请记住，无论 useLayoutEffect 还是 useEffect 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 useLayoutEffect 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至 useEffect 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 useLayoutEffect 执行之前 HTML 都显示错乱的情况下）。若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 showChild && <Child /> 进行条件渲染，并使用 useEffect(() => { setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },{
      content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。如果你使用服务端渲染，请记住，无论 useLayoutEffect 还是 useEffect 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 useLayoutEffect 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至 useEffect 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 useLayoutEffect 执行之前 HTML 都显示错乱的情况下）。若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 showChild && <Child /> 进行条件渲染，并使用 useEffect(() => { setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },{
      content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。如果你使用服务端渲染，请记住，无论 useLayoutEffect 还是 useEffect 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 useLayoutEffect 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至 useEffect 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 useLayoutEffect 执行之前 HTML 都显示错乱的情况下）。若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 showChild && <Child /> 进行条件渲染，并使用 useEffect(() => { setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10
      }
    },{
      content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。如果你使用服务端渲染，请记住，无论 useLayoutEffect 还是 useEffect 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 useLayoutEffect 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至 useEffect 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 useLayoutEffect 执行之前 HTML 都显示错乱的情况下）。若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 showChild && <Child /> 进行条件渲染，并使用 useEffect(() => { setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
      type: "text",
      time: "",
      user: {
        name: "李四",
        avatar,
        id: 10000
      }
    },
  ]

  return <>
      <List className='wechat-list' style={{'--border-inner': 'none','--border-bottom': 'none', '--border-top': 'none', '--align-items':'flex-start' }} >
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
