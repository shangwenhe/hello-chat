import React from 'react'
import { Avatar, Badge, List, Space } from 'antd-mobile'
import './index.less';
import {
  ScanningOutline,
  SearchOutline,
  AppstoreOutline,
  EyeOutline,
  MovieOutline,
  PictureOutline
} from 'antd-mobile-icons'
import { history, useModel } from '@umijs/max';
import NavBarMenu from '@/components/NavBarMenu';

export default function Page() {
  const { userInfo } = useModel("user")


  return (
    <>
      <NavBarMenu title='发现'></NavBarMenu>
      <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
        <List>
          <List.Item
            prefix={<PictureOutline />}
            extra={
              <Badge content={Badge.dot}>
                <Avatar src={userInfo.avatar} style={{ '--size': '32px' }}  />
              </Badge>
            }
            onClick={() => {}}>
            朋友圈
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<ScanningOutline />} onClick={() => {}}>
            扫一扫
          </List.Item>
        </List>

        <List>
          <List.Item prefix={<MovieOutline />} onClick={() => {
            history.push({pathname: `/discover/video`})
          }}>
            视频号
          </List.Item>
          <List.Item prefix={<EyeOutline />} onClick={() => {
            history.push({pathname: `/discover/findout`})
          }}>
            看一看
          </List.Item>
          <List.Item prefix={<SearchOutline />} onClick={() => {
            history.push({pathname: `/discover/search`})
          }}>
            搜一搜
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<AppstoreOutline />} onClick={() => {}}>
            小程序
          </List.Item>
        </List>
      </Space>

    </>
  );
}
