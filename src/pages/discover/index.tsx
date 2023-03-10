import React from 'react'
import { Avatar, Badge, List, Space } from 'antd-mobile'
import {
  ScanningOutline,
  SearchOutline,
  AppstoreOutline,
  TravelOutline,
  MovieOutline,
  PictureOutline,
  FileOutline
} from 'antd-mobile-icons'
import { history, useModel } from '@umijs/max';
import NavBarMenu from '@/components/NavBarMenu';
import FixedTopBar from '@/components/FixedTopBar';

export default function Page() {
  const { userInfo } = useModel("user")
  return (
    <>
      <FixedTopBar>
        <NavBarMenu title='发现'></NavBarMenu>
      </FixedTopBar>
      <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
        <List>
          <List.Item
            prefix={<PictureOutline />}
            extra={
              <Badge content={Badge.dot}>
                <Avatar src={userInfo.avatar} style={{ '--size': '32px' }}  />
              </Badge>
            }
            onClick={() => {
              history.push({
                pathname: `/discover/friend`
              })
            }}>
            朋友圈
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<ScanningOutline />} onClick={() => {
            history.push({pathname: `/discover/scanner`})
          }}>
            扫一扫
          </List.Item>
          <List.Item prefix={<FileOutline />} onClick={() => {
            history.push({pathname: `/discover/todo`})
          }}>
            计划列表
          </List.Item>
          <List.Item prefix={<TravelOutline />} onClick={() => {
            history.push({pathname: `/discover/findout`})
          }}>
            看一看
          </List.Item>
        </List>

        <List>
          <List.Item prefix={<MovieOutline />} onClick={() => {
            history.push({pathname: `/discover/video`})
          }}>
            视频号
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
