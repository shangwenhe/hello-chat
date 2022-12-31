import React from 'react'
import {
  CouponOutline,
  CompassOutline,
  PhoneFill,
  SetOutline,
  PhonebookOutline,
  LockOutline,
  MessageOutline,
  PictureOutline,
  TagOutline
} from 'antd-mobile-icons'
import { NavBar, Space, List } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons'
import { history, useModel } from 'umi';
import './index.less';
import UserCard from '@/components/UserCard';


export default function Page() {

  const { userInfo } = useModel("user")

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  );

  const back = () =>{
    history.back();
  }
  return (
    <>
      <NavBar right={right} onBack={back}>
        {userInfo.name}
      </NavBar>
      <Space direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
        <UserCard user={userInfo}></UserCard>
        <List>
          <List.Item prefix={<PhonebookOutline/> } onClick={() => {}}>
            电话
          </List.Item>
          <List.Item prefix={<TagOutline />} onClick={() => {}}>
            标签
          </List.Item>

          <List.Item prefix={<LockOutline />} onClick={() => {}}>
            权限
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<PictureOutline />} onClick={() => {}}>
            朋友圈
          </List.Item>
          <List.Item prefix={<MoreOutline />} onClick={() => {}}>
            更多信息
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<MessageOutline />} onClick={() => {}}>
            发消息
          </List.Item>
          <List.Item prefix={<PhoneFill />} onClick={() => {}}>
            音视频通话
          </List.Item>
        </List>
      </Space>
    </>
  );
}

