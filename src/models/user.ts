import { IUserInfo } from "@/interface/user";
import { useState } from "react";

export default () => {

  const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
  const [userInfo, setUserInfo ] = useState<IUserInfo>({
    name: '张三',
    id: 10,
    avatar,
  })

  return { userInfo };
};
