import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import IMInput from './IMInput';
import ChatList from './ChatList';


export default function Page() {
  return (
    <>
      <ChatList></ChatList>
      <IMInput></IMInput>
    </>
  );
}
