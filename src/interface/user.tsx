
export interface IUserInfo {
  name: string,
  avatar: string,
  id: number
}

export interface IUserChat {
  content: string,
  type?: string,
  time?: string,
  user?: IUserInfo
}
