import React, { useEffect, useState } from 'react'
import IMInput from './IMInput';
import ChatList from './ChatList';
import { IUserChat, IUserInfo } from '@/interface/user';
import { getChart } from '@/api/user';
import { Form, NavBar, Space } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons'
import { history, useModel } from 'umi';


export default function Page() {

  const { userInfo } = useModel('user');
  const currentUser: IUserInfo = userInfo;

  const chartUser: IUserInfo = {
    ...userInfo,
    name: '大宝',
    id: 10
  }
  const [userChat, setUserChat] =  useState<IUserChat[]>([]);

  useEffect(()=>{
    getChart(100).then(res=>{
      setUserChat(res.data);
    })
  }, [])

  useEffect(()=>{
    if (userChat.length > 0) {
      const lastMsg = userChat[ userChat.length -1 ]
      if (/(吗|吧|不|你好)/.test(lastMsg.content) && lastMsg.user.id !== 999){
        setTimeout(()=>{
          const msg: IUserChat = {
            content: lastMsg.content?.replaceAll(/(吗|吧|不)/ig, ''),
            time: '',
            type: 'text',
            user: {
              ...userInfo,
              name: '张三',
              id: 999,
            }
          }
          setUserChat([ ...userChat, msg ]);
        }, 500)
      }
    }
  }, [userChat])

  const [ form ] = Form.useForm<IUserChat>();

  const onFinish = (values : IUserChat) => {
    console.log(values)
    if (!values.content) { return; }
    const msg: IUserChat = {
      content: values.content,
      time: '',
      type: 'text',
      user: currentUser
    }
    setUserChat([ ...userChat, msg ]);
    form.resetFields();
  };

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
        {chartUser.name}
      </NavBar>
      <ChatList currentUser={currentUser} userChat={userChat}  ></ChatList>
      <Form form={form} onFinish={onFinish} initialValues={{content: ''}}>
        <IMInput form={form}></IMInput>
      </Form>
    </>
  );
}
