import React, { useState } from 'react'
import { Avatar, Badge, List, TabBar } from 'antd-mobile'
import styles from './index.less';
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


export default function Page() {

  const [ avatar, setAvatar] =useState<string>('https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ')


  return (
    <>
      <List>
        <List.Item
          prefix={<Avatar src={ avatar } style={{ '--size': '64px' }}   />}
          description='Deserunt dolor ea eaque eos'
        >
          Novalee Spicer
        </List.Item>
        <List.Item
          prefix={<Avatar src={ avatar } style={{ '--size': '64px' }}   />}
          description='Deserunt dolor ea eaque eos'
        >
          Novalee Spicer
        </List.Item>
      </List>
      <List header='可点击的功能列表'>
        <List.Item prefix={<CouponOutline />} onClick={() => {}}>
          服务
        </List.Item>
      </List>


      <List header='可点击的功能列表'>
        <List.Item prefix={<CompassOutline />} onClick={() => {}}>
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

      

      <List header='可点击的功能列表'>
        <List.Item prefix={<ReceivePaymentOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

    </>
  );
}
