import React from 'react'
import { Avatar, Button, List, NavBar, Space, Switch } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'
import { useModel } from '@umijs/max';

export default function Page() {
  const { userInfo } = useModel("user")

  const back = () =>{
    history.back();
  }
  return (
    <>
      <NavBar style={{'--height': 'var(--top-fixed-bar)', 'backgroundColor': 'var(--adm-color-box)'}} onBack={back}>
        {userInfo.name}设置
      </NavBar>
      <Space direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
        <List>
          <List.Item arrow={false}>
            <Space block wrap>
              <Avatar src={userInfo.avatar} />
              <Button style={{'--border-style': 'dashed', height: '44px', width: '44px' }}>
                <Space>
                  <AddOutline />
                </Space>
              </Button>
            </Space>
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            查找聊天记录
          </List.Item>
        </List>

        <List>
          <List.Item extra={<Switch />} arrow={false}>
            消息免打扰
          </List.Item>
          <List.Item extra={<Switch />} arrow={false}>
            置顶聊天
          </List.Item>
          <List.Item extra={<Switch />} arrow={false}>
            提醒
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            设置聊天背景
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            清空聊天记录
          </List.Item>
        </List>
        <List>
          <List.Item onClick={() => {}}>
            投诉
          </List.Item>
        </List>
      </Space>

    </>
  );
}
