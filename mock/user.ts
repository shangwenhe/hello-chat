
const avatar = 'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg';

export default {
  'GET /api/current-user': {
    msg: 'OK',
    code: 200,
    data: {
      name: '华北',
      id: 10,
      avatar,
    }
  },

  // 返回值可以是数组形式
  'GET /api/user/chart/:id': {
    msg: 'OK',
    code: 200,
    data: [
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
        content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我了。`,
        type: "text",
        time: "",
        user: {
          name: "李四",
          avatar,
          id: 10
        }
      },{
        content: `如果 setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
        type: "text",
        time: "",
        user: {
          name: "李四",
          avatar,
          id: 10
        }
      },{
        content: `如果你正在将代码从 class 这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 useLayoutEffect 执行之前 HTML 都显示错乱的情况下）。若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 showChild && <Child /> 进行条件渲染，并使用 useEffect(() => { setShowChild(true); }, []) 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。`,
        type: "text",
        time: "",
        user: {
          name: "李四",
          avatar,
          id: 10
        }
      },{
        content: `如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。如果你使用服务端渲染，请记住，无论 useLayoutEffect 还是 useEffect 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 useLayoutEffect 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至了。`,
        type: "text",
        time: "",
        user: {
          name: "李四",
          avatar,
          id: 10000
        }
      },
    ]
  },

  // 返回值也可以是对象形式
  'GET /api/chart/list': {
    msg: 'OK',
    code: 200,
    data: [
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '1',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '2',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '3',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '4',
      },{
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '5',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '6',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '7',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '8',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '11',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '12',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '13',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '14',
      },{
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '15',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '16',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '17',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '18',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '111',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '112',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '113',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '114',
      },{
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
        id: '115',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
        name: 'Sara Koivisto',
        description: 'Animi eius expedita, explicabo',
        id: '116',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
        name: 'Marco Gregg',
        description: 'Ab animi cumque eveniet ex harum nam odio omnis',
        id: '117',
      },
      {
        avatar:
          'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg',
        name: 'Edith Koenig',
        description: 'Commodi earum exercitationem id numquam vitae',
        id: '118',
      },
    ]
  }
}
