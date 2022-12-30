import React, { useEffect, useState } from 'react'
import IMInput from './IMInput';
import ChatList from './ChatList';
import { IUserChat, IUserInfo } from '@/interface/user';
import { getChart } from '@/api/user';
import { Form } from 'antd-mobile';

const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';

export default function Page() {

  const currentUser: IUserInfo = {
    name: '张三',
    id: 10,
    avatar,
  }

  const [userChat, setUserChat] =  useState<IUserChat[]>([]);

  useEffect(()=>{
    getChart(100).then(res=>{
      setUserChat(res.data);
    })
  }, [])

  const onFinish = (values : IUserChat) => {
    const msg: IUserChat = {
      content: values.content,
      time: '',
      type: 'text',
      user: currentUser
    }
    setUserChat([ ...userChat, msg ]);
    form.resetFields();
  };

  const [ form ] = Form.useForm<IUserChat>();

  return (
    <>
      <ChatList currentUser={currentUser} userChat={userChat} ></ChatList>
      <Form form={form} onFinish={onFinish}>
        <IMInput form={form}></IMInput>
      </Form>
    </>
  );
}
