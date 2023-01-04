import React from 'react'
import { List, Space } from 'antd-mobile'
import './index.less';
import {
  CouponOutline,
  CompassOutline,
  ReceivePaymentOutline,
  SetOutline,
  SmileOutline,
  BankcardOutline,
  MovieOutline,
  PictureOutline
} from 'antd-mobile-icons'
import UserCard from '@/components/UserCard';
import { history, useModel } from '@umijs/max';

export default function Page() {

  const { userInfo } = useModel("user")

  return (
    <>
      <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)", paddingTop: 0 }}>
        <UserCard user={userInfo}></UserCard>
        <List>
          <List.Item prefix={<CouponOutline />} onClick={() => {
            history.push({
              pathname: `/user/service`
            })
          }}>
            服务
          </List.Item>
        </List>

        <List>
          <List.Item prefix={<CompassOutline />} onClick={() => {
            history.push({
              pathname: `/user/collection`
            })
          }}>
            收藏
          </List.Item>
          <List.Item prefix={<PictureOutline />} onClick={() => {}}>
            朋友圈
          </List.Item>
          <List.Item prefix={<MovieOutline />} onClick={() => {}}>
            视频号
          </List.Item>
          <List.Item prefix={<BankcardOutline />} onClick={() => {}}>
            卡包
          </List.Item>
          <List.Item prefix={<SmileOutline />} onClick={() => {}}>
            表情
          </List.Item>
        </List>
        <List>
          <List.Item prefix={<ReceivePaymentOutline />} onClick={() => {}}>
            账单
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={() => {
            history.push({
              pathname: `/user/settings`
            })
          }}>
            设置
          </List.Item>
        </List>
      </Space>

    </>
  );
}
