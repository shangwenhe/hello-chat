import React from 'react'
import { List, NavBar, Space } from 'antd-mobile'
import { useModel } from '@umijs/max';
import FixedTopBar from '@/components/FixedTopBar';

export default function Page() {
  const { userInfo } = useModel("user")

  const back = () =>{
    history.back();
  }
  return (
    <>
      <FixedTopBar>
        <NavBar style={{'--height': 'var(--top-fixed-height)', 'backgroundColor': 'var(--adm-color-box)'}} onBack={back}>
          {userInfo.name}设置
        </NavBar>
      </FixedTopBar>
      <Space
        className='layout-scroll-content'
        direction='vertical' block
        style={{ '--gap': '1em' }}>
        <List>
          <List.Item onClick={() => {}}>
            账号与安全
          </List.Item>
        </List>

        <List>
          <List.Item onClick={() => {}}>
            青少年模式
          </List.Item>
          <List.Item onClick={() => {}}>
            关怀模式
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            新消息通知
          </List.Item>
          <List.Item onClick={() => {}}>
            聊天
          </List.Item>
          <List.Item onClick={() => {}}>
            通用
          </List.Item>
        </List>
        <List header='隐私'>
          <List.Item onClick={() => {}}>
            朋友权限
          </List.Item>
          <List.Item onClick={() => {}}>
            个人信息与权限
          </List.Item>
          <List.Item onClick={() => {}}>
            个人信息收集清单
          </List.Item>
          <List.Item onClick={() => {}}>
            第三方信息共享清单
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            关于我们
          </List.Item>
          <List.Item onClick={() => {}}>
            帮助与反馈
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            插件
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            账号切换
          </List.Item>
        </List>
      </Space>

    </>
  );
}
