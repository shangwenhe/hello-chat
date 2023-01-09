import { getCurrentUser } from "@/api/user";
import { IUserInfo } from "@/interface/user";
import { useEffect, useState } from "react";

export default () => {


  const [userInfo, setUserInfo ] = useState<IUserInfo>({
    id: 0,
    name: '',
    avatar: '',
  })

  useEffect(()=>{
    getCurrentUser().then(({data}) => {
      setUserInfo(data);
    })
  }, [])

  return {
    userInfo,
    setUserInfo: (info: IUserInfo) => {
      setUserInfo(info)
    }
  };
};
