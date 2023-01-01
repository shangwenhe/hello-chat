import { history } from "@umijs/max";
import { List, SearchBar } from "antd-mobile";
import { useState } from "react";


const SearchPage = () => {

  const [ value, onChange] = useState<string>('');
  const onCancel = () => {
    history.back();
  }


  const defaultInfo = () => {
    return <>
    <List header='最近在搜'>
      <List.Item  onClick={()=>{}}>
        2023新贺词
      </List.Item>
      <List.Item onClick={()=>{}}>
        感谢医护人员
      </List.Item>
    </List>
    <List header='搜索发布'>
      <List.Item onClick={()=>{}}>
        2023新贺词
      </List.Item>
      <List.Item onClick={()=>{}}>
        感谢医护人员
      </List.Item>
    </List>
    </>
  }
  const searchContent = () => {
    return <>
    <List header='联系人'>
      <List.Item>

      </List.Item>
    </List>
    <List header='群聊'>
      <List.Item>
      <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
      </List.Item>
    </List>
    <List header='聊天记录'>
      <List.Item>
      <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
      </List.Item>
    </List>
    <List header='查找账号'>
      <List.Item>
      <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
      </List.Item>
    </List>

    <List header='查找账号'>
      <List.Item>
      <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
      </List.Item>
    </List>
    </>
  }
  return <>
    <List>
      <List.Item>
      <SearchBar
        value={value}
        onChange={onChange}
        placeholder='请输入内容'
        showCancelButton={() => true}
        onCancel={onCancel} />
      </List.Item>
    </List>
    { value.length > 0 ? searchContent() : defaultInfo() }


  </>
}
export default SearchPage
